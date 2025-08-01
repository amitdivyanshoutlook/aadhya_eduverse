import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = {
  // Home page data
  getHomeData: () => {
    return axios.get(`${API_BASE_URL}/home`);
  },
  
  // Products
  getAllProducts: () => {
    return axios.get(`${API_BASE_URL}/products`);
  },
  
  getProductById: (id) => {
    return axios.get(`${API_BASE_URL}/products/${id}`);
  },
  
  // Services
  getAllServices: () => {
    return axios.get(`${API_BASE_URL}/services`);
  },
  
  getServiceById: (id) => {
    return axios.get(`${API_BASE_URL}/services/${id}`);
  },
  
  getServicesByCategory: (category) => {
    return axios.get(`${API_BASE_URL}/services/category/${category}`);
  },
  
  // Company Info
  getCompanyInfo: () => {
    return axios.get(`${API_BASE_URL}/company`);
  }
};

export default api;