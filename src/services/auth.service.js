import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_ENV;

const register = (name, email, password) =>
  axios
    .post(`${API_URL}/users/register`, {
      name,
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('auth-token', response.data.token);
      }
      return response;
    });

const login = (email, password) =>
  axios
    .post(`${API_URL}/users/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('auth-token', response.data.token);
      }
      return response;
    });

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('auth-token');
};

const authService = {
  register,
  login,
  logout,
};
export default authService;
