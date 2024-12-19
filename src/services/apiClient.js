import axios from 'axios';
import { getAccessToken } from './authService';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

apiClient.interceptors.request.use(config => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
