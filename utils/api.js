import axios from 'axios';

const API_BASE_URL = 'https://a6d0-178-233-24-227.ngrok-free.app';

const headers = {
  'ngrok-skip-browser-warning': '69420',
  'Content-Type': 'application/json',
};
const headers2 = {
  'ngrok-skip-browser-warning': '69420',
  'Content-Type': 'application/x-www-form-urlencoded',
};



export const signUp = async (userData) => {
  try {
    console.log(userData)
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
      headers2,
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
