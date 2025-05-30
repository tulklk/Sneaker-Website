// // src/services/UserService.js
import axios from 'axios';

const API_BASE_URL = "http://localhost:5123/api/user";

export const loginUser = (email, password) => {
  return axios.post(`${API_BASE_URL}/login`, { email, password });
};

export const registerUser = (user) => {
    // ✅ Sửa lại đúng endpoint POST /api/user
    return axios.post('http://localhost:5123/api/user', user);
  };
  
  
