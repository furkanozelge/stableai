import axios from 'axios';

const API_BASE_URL = 'https://e4c4-178-233-24-227.ngrok-free.app';

const headers = {
  'ngrok-skip-browser-warning': '69420',
  'Content-Type': 'application/json',
};

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/me`, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
