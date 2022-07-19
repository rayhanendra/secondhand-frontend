import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.NEXT_PUBLIC_ENV;

const getAllUser = () =>
  axios.get(`${API_URL}/users`).then((response) => response);

const updateUser = (data) =>
  axios
    .put(`${API_URL}/users/20`, data, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        console.log(response.data);
      }
      return response;
    });

const userService = {
  getAllUser,
  updateUser,
};
export default userService;
