import React, { useState } from "react";
import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';

const LoginModal = () => {
  const { showLogin, closeModals, switchToSignup } = useModal();
  const { login } = useAuth();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await login({ phone, password });
      closeModals();
    } catch (err) {
      setError(err.response?.data?.msg || err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={closeModals} />
      <div className="relative w-full max-w-sm md:max-w-md bg-slate-900 text-slate-100 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-7">
        <button
          type="button"
          aria-label="Close"
          onClick={closeModals}
          className="absolute top-3 right-3 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-md p-1 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4 text-white">Log in</h2>
        {error ? <div className="text-red-400 text-sm mb-3">{error}</div> : null}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-75 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400 text-center focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="Phone"
            />
          </div>
          <div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-75 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400 text-center focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-50 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2.5 font-medium transition-colors disabled:opacity-60 cursor-pointer"
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <div className="mt-3 text-center">
          <button 
            onClick={switchToSignup}
            className="text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline cursor-pointer"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;