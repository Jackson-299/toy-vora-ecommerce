import axios from "axios";

const API_URL = "https://backend-y16b.vercel.app/";

// Get All Products
export const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Create Product
export const createProduct = async (productData) => {
  const response = await axios.post(
    API_URL,
    productData
  );

  return response.data;
};

// Search Products
export const searchProducts = async (search) => {
  const response = await axios.get(
    `${API_URL}/search?search=${search}`
  );

  return response.data;
};

// Sort Products
export const sortProducts = async (sort) => {
  const response = await axios.get(
    `${API_URL}/sort?sort=${sort}`
  );

  return response.data;
};