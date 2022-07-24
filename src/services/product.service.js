import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_ENV;

const addProduct = (data) =>
  axios.post(`${API_URL}/product`, data).then((response) => response);

const getAllProduct = () =>
  axios.get(`${API_URL}/product`).then((response) => response);

const getProductById = () =>
  axios.get(`${API_URL}/product/20`).then((response) => response);

const updateProduct = (data) =>
  axios.put(`${API_URL}/product/20`, data).then((response) => response);

const deleteProduct = () =>
  axios.delete(`${API_URL}/product/20`).then((response) => response);

const productService = {
  addProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
export default productService;
