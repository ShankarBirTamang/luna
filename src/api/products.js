import config from "@/config/config";
import axios from "axios";
import { authToken } from "./api";
import { formatSearchParams } from "@/helpers/formatParams";

async function getAllProducts(searchParams) {
  const query = formatSearchParams(searchParams);

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

  return response.data;
}

// baseUrl/api/products/:id
async function getProductById(id) {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
}

async function addProduct(data) {
  const response = await axios.post(`${config.apiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
}

async function editProduct(id, data) {
  const response = await axios.put(
    `${config.apiUrl}/api/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
}

async function getProductsByCategory(category) {
  const response = await axios.get(
<<<<<<< HEAD
    `${config.apiUrl}/api/products/category/${category}
    }`
=======
    `${config.apiUrl}/api/products/category/${category}`
>>>>>>> f22c41e1f1539b4d62b5f105892d82abb9634cbe
  );

  return response.data;
}

<<<<<<< HEAD
export { getAllProducts, getProductById, addProduct, editProduct,getProductsByCategory };
=======
async function getProductsByBrand(brand) {
  const response = await axios.get(
    `${config.apiUrl}/api/products/brand/${brand}`
  );

  return response.data;
}

async function getBrands() {
  const response = await axios.get(`${config.apiUrl}/api/products/brands`);

  return response.data;
}

export {
  getAllProducts,
  getProductById,
  addProduct,
  editProduct,
  getProductsByCategory,
  getProductsByBrand,
  getBrands,
};
>>>>>>> f22c41e1f1539b4d62b5f105892d82abb9634cbe

/**
 * HTTP Methods
 * 1. GET - Read
 * 2. POST - Create
 * 3. PUT - Update
 * 4. DELETE - Delete
 */
