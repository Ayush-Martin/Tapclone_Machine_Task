import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true, // Required for sending HTTP-only cookies
});

// Request Interceptor: Attach Access Token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor: Handle 401 & Refresh Token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to get a new access token using the httpOnly refresh token cookie
        const response = await axios.post(
          (import.meta.env.VITE_API_URL || 'http://localhost:5000/api') + '/auth/refresh',
          {},
          { withCredentials: true }
        );

        if (response.data?.success && response.data?.data?.accessToken) {
          const newAccessToken = response.data.data.accessToken;
          
          // Save new token
          localStorage.setItem('accessToken', newAccessToken);

          // Update Authorization header for the original request
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          
          // Retry the original request with new token
          return api(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails (e.g. refresh token expired), force logout
        localStorage.removeItem('accessToken');
        window.location.href = '/admin/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
