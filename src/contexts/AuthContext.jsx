import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../api/axios";

const AuthContext = createContext();

// Helper function to check if token exists and is not expired
const isTokenValid = (token) => {
  if (!token) return false;

  try {
    // Decode JWT token to check expiration (basic check)
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;

    // Check if token is expired
    if (payload.exp && payload.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  const logout = useCallback(() => {
    // Remove token from storage
    localStorage.removeItem("token");

    // Clear user state
    setUser(null);
    setIsAuthenticated(false);
    setAuthChecked(true);

    // Redirect to home page
    window.location.href = "/";
  }, []);

  // Check if user is authenticated on app load
  const checkAuthStatus = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token || !isTokenValid(token)) {
        localStorage.removeItem("token"); // Remove invalid token
        setLoading(false);
        setAuthChecked(true);
        return;
      }

      // Verify token with backend by getting user profile
      const response = await axiosInstance.get("/auth/user/profile");

      if (response.data && response.data.success && response.data.user) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        setAuthChecked(true);
      } else {
        // Token is invalid
        logout();
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      // Only logout if it's a 401 (unauthorized) error
      if (error.response && error.response.status === 401) {
        logout();
      } else {
        // For other errors (network issues, etc.), don't logout immediately
        console.warn(
          "Auth check failed due to network or server error, retrying..."
        );
        setLoading(false);
        setAuthChecked(true);
      }
    } finally {
      setLoading(false);
    }
  }, [logout]);

  useEffect(() => {
    // Initialize authentication state from localStorage
    const initializeAuth = () => {
      const token = localStorage.getItem("token");
      if (token && !authChecked) {
        // If we have a valid token, optimistically set as authenticated
        // while we verify with the server
        if (isTokenValid(token)) {
          setIsAuthenticated(true);
        }
        checkAuthStatus();
      } else if (!token) {
        setLoading(false);
        setAuthChecked(true);
      }
    };

    initializeAuth();
  }, [checkAuthStatus, authChecked]);

  const login = async (credentials) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);

      const { token } = response.data;
      if (!token) {
        throw new Error("Authentication error from server");
      }

      // Store token
      localStorage.setItem("token", token);

      // Get user profile
      const userResponse = await axiosInstance.get("/auth/user/profile");
      if (!userResponse || !userResponse.data || !userResponse.data.success) {
        throw new Error("Login failed - unable to fetch user profile");
      }

      // Set user state
      setUser(userResponse.data.user);
      setIsAuthenticated(true);
      setAuthChecked(true);

      console.log("User logged in successfully:", userResponse.data.user);
      return { success: true, user: userResponse.data.user };
    } catch (error) {
      console.error("Login error:", error);
      // Clear any stored token on login failure
      localStorage.removeItem("token");
      setUser(null);
      setIsAuthenticated(false);
      setAuthChecked(true);
      throw error;
    }
  };

  const sendSignupOtp = async (userData) => {
    try {
      const response = await axiosInstance.post(
        "/auth/signup/send-otp",
        userData
      );

      if (response.data && response.data.success) {
        return { success: true, message: response.data.message };
      } else {
        throw new Error(response.data?.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Send OTP error:", error);
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      const response = await axiosInstance.post(
        "/auth/signup/verify-otp",
        userData
      );

      // Handle both response formats: direct token or wrapped in success object
      const token =
        response.data.token || (response.data.success && response.data.token);

      if (token) {
        // Store token
        localStorage.setItem("token", token);

        // Get user profile to set the authenticated state
        try {
          const userResponse = await axiosInstance.get("/auth/user/profile");
          if (
            userResponse.data &&
            userResponse.data.success &&
            userResponse.data.user
          ) {
            setUser(userResponse.data.user);
            setIsAuthenticated(true);
            setAuthChecked(true);

            console.log(
              "User registered and logged in successfully:",
              userResponse.data.user
            );
            return {
              success: true,
              user: userResponse.data.user,
              message: response.data.message,
            };
          }
        } catch (profileError) {
          console.error(
            "Error fetching user profile after signup:",
            profileError
          );
          // Even if profile fetch fails, consider signup successful if we have token
          setIsAuthenticated(true);
          setAuthChecked(true);
        }

        return {
          success: true,
          message: response.data.message || "Registration successful",
          token,
        };
      } else {
        throw new Error(
          response.data?.message || "Signup failed - no token received"
        );
      }
    } catch (error) {
      console.error("Signup error:", error);
      // Clear any stored token on signup failure
      localStorage.removeItem("token");
      setUser(null);
      setIsAuthenticated(false);
      setAuthChecked(true);
      throw error;
    }
  };

  const refreshUserData = async () => {
    try {
      const response = await axiosInstance.get("/auth/user/profile");
      if (response.data && response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Failed to refresh user data:", error);
    }
  };

  const debugAuth = () => {
    const token = localStorage.getItem("token");
    console.log("Debug Auth State:", {
      hasToken: !!token,
      tokenValid: token ? isTokenValid(token) : false,
      isAuthenticated,
      user: user ? user.email || user.username : null,
      loading,
      authChecked,
    });
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    authChecked,
    login,
    signup,
    sendSignupOtp,
    logout,
    checkAuthStatus,
    refreshUserData,
    debugAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
