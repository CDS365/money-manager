import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showErrorPopup } from '@/lib/utils';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Optional: inject token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling API failures globally
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const message =
      (error.response?.data as any)?.message ||
      error.message ||
      'Something went wrong. Please try again.';

    // Trigger global popup
    showErrorPopup(message);

    // You can still propagate error to component-level error handling
    return Promise.reject(error);
  }
);

export default api;
