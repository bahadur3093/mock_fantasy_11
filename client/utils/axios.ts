import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST,
  },
});

// Optional: Add interceptors for auth/token handling or logging
api.interceptors.request.use(
  (config) => {
    // Example: Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
