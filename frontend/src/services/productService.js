import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/product/${id}`);
export const createProduct = (data) => axios.post(`${API_URL}/product`, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/product/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/product/${id}`);
