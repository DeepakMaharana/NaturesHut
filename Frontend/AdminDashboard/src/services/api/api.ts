// src/services/api.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

// Create an axios instance with appropriate TypeScript types
const api: AxiosInstance = axios.create({
  baseURL: apiUrl, // Your API base URL
  timeout: 10000, // Optional: Set a timeout limit
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for authentication or logging
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Add token to request if needed
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error:AxiosError) => {
      console.error('Request error:', error);
      return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error:AxiosError) => {
      // Handle all types of errors here
      return handleAxiosError(error);
  }
);


// Common error handling function
const handleAxiosError = (error: AxiosError) => {
  
  // Check if the error is due to network issues or timeout
  if (error.code === 'ECONNABORTED') {
    console.error('Timeout error:', error.message);
    return Promise.reject({ message: 'Request timed out, please try again later.' });
  }
  
  if (!error.response) {
    console.error('Network error or server did not respond:', error.message);
    return Promise.reject({ message: 'Network error or server is unreachable.' });
  }

  // Extract response details
  const status = error.response.status;
  const data = error.response.data;

  switch (status) {
    case 400:
      console.error('Bad request:', data?.message || data);
      return Promise.reject({ message: 'Bad request. Please check your input.' });

    case 401:
      console.error('Unauthorized:', data?.message || data);
      // Optionally, handle a redirect to login or token refresh
      // window.location.href = '/login'; // Example redirect
      return Promise.reject({ message: 'Unauthorized. Please login again.' });

    case 403:
      console.error('Forbidden:', data?.message || data);
      return Promise.reject({ message: 'You do not have permission to perform this action.' });

    case 404:
      console.error('Not found:', data?.message || data);
      return Promise.reject({ message: 'The requested resource was not found.' });

    case 500:
      console.error('Internal server error:', data?.message || data);
      return Promise.reject({ message: 'Internal server error. Please try again later.' });

    case 503:
      console.error('Service unavailable:', data?.message || data);
      return Promise.reject({ message: 'Service is currently unavailable. Please try again later.' });

    default:
      console.error('Unexpected error:', data?.message || data);
      return Promise.reject({ message: 'An unexpected error occurred. Please try again later.' });
  }
};


export default api;
