import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = process.env.NEXT_PUBLIC_ENV;

const getAllUser = () =>
  axios.get(`${API_URL}/users`).then((response) => response);

const getUserById = (id) =>
  axios.get(`${API_URL}/users/${id}`).then((response) => response);

const updateUser = (data, id) => {
  return axios.put(`${API_URL}/users/update/${id}`, data);
};

const userService = {
  getAllUser,
  getUserById,
  updateUser,
};
export default userService;
