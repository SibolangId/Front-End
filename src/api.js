// src/api.js

import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const Login = async (userName, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      userName,
      password,
    });
    return response.data; // mengembalikan data dari respons API
  } catch (error) {
    throw error; // lempar error untuk ditangani di komponen pemanggil
  }
};

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export const getUserById = (id) => {
  return axios.get(`${API_URL}/users/${id}`);
};

export const createUser = (userData) => {
  return axios.post(`${API_URL}/users`, userData);
};

export const updateUser = (userData) => {
  return axios.patch(`${API_URL}/users`, userData);
};

export const deleteUser = () => {
  return axios.delete(`${API_URL}/users`);
};
