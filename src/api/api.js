const API_BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Payment endpoints
  SUBSCRIBE_USER: (userId) => `${API_BASE_URL}/payment/subscribe/${userId}`,
  VERIFY_PAYMENT: (userId) => `${API_BASE_URL}/payment/verify-payment/${userId}`,
  
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/auth/login`,
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  USER_PROFILE: `${API_BASE_URL}/auth/user/profile`,
  
  // Course endpoints
  GET_COURSES: `${API_BASE_URL}/course`,
  GET_COURSE: (courseId) => `${API_BASE_URL}/course/${courseId}`,
};

export default API_ENDPOINTS;