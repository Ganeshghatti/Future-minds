import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { useAuth } from '../hooks/useAuth';
import { useModal } from '../hooks/useModal';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { changePassword } = useAuth();
  const { openLogin } = useModal();
  
  const [token, setToken] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const passwordFilled = formData.password.length > 0 && formData.confirmPassword.length > 0;
  const passwordsMatch = passwordFilled && formData.password === formData.confirmPassword;
  const passwordsMismatch = passwordFilled && !passwordsMatch;

  // Verify token on component mount
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const tokenFromUrl = searchParams.get('token');
        if (!tokenFromUrl) {
          setError('No reset token provided');
          setLoading(false);
          return;
        }

        setToken(tokenFromUrl);
        
        // Verify token with backend
        const response = await axiosInstance.get(`/auth/verify-reset-password-link?resetToken=${tokenFromUrl}`);
        
        if (response.data && response.data.success) {
          setIsTokenValid(true);
        } else {
          setError(response.data?.message || 'Invalid or expired reset token');
          setIsTokenValid(false);
        }
      } catch (error) {
        console.error('Token verification error:', error);
        setError(error.response?.data?.message || 'Failed to verify reset token');
        setIsTokenValid(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      setSubmitting(true);
      setError('');
      
      await changePassword({
        resetToken: token,
        password: formData.password
      });
      
      setSuccess(true);
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        openLogin();
        navigate('/', { replace: true });
      }, 3000);
      
    } catch (error) {
      console.error('Password change error:', error);
      setError(error.message || 'Failed to change password');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-300">Verifying reset token...</p>
        </div>
      </div>
    );
  }

  if (!isTokenValid) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Invalid Reset Link</h2>
            <p className="text-slate-300 mb-6">{error}</p>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Password Changed Successfully!</h2>
            <p className="text-slate-300 mb-6">
              Your password has been updated. You will be redirected to login in a few seconds.
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">Reset Your Password</h2>
            <p className="text-slate-400">Enter your new password below</p>
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
            <div aria-live="polite" className="m-2 min-h-[1.3rem]">
            {passwordsMismatch && (
                <p className="text-red-400 text-sm">Passwords do not match</p>
              )}
              {passwordsMatch && (
                <p className="text-sm text-emerald-400">Passwords match</p>
              )}
            </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength={6}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                minLength={6}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                placeholder="Confirm new password"
              />
            </div>

            <button
              type="submit"
              disabled={submitting || passwordsMatch}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/', { replace: true })}
              className="text-slate-400 hover:text-slate-300 text-sm underline"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
