import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_ENV;

const getAllUser = () =>
  axios.get(`${API_URL}/users`).then((response) => response);

const userService = {
  getAllUser,
};
export default userService;
