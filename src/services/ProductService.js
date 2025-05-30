import axios from 'axios';

const API_BASE_URL_PRODUCTS = '/api/products'; // Assuming your product API base URL is /api/products (Adjust if needed)

// Function to get all products
const getAllProducts = async () => {
  try {
    // TODO: Replace with actual axios call to your product API
    const response = await axios.get(API_BASE_URL_PRODUCTS);
    return response.data;

    // --- Placeholder Data --- Remove this when implementing actual fetch
    /*
    const placeholderProducts = Array.from({ length: 20 }, (_, i) => ({
      id: `prod_${i + 1}`,
      name: `Product ${i + 1}`,
      price: (i + 1) * 10,
      stock: Math.floor(Math.random() * 100) + 1,
      description: `Description for product ${i + 1}`,
      // Add other relevant product fields like image URL, category, etc.
    }));
    return placeholderProducts;
    */
    // --- End Placeholder Data ---
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    throw error;
  }
};

// Function to get a product by ID
const getProductById = async (id) => {
   try {
    // TODO: Replace with actual axios call to your product API
    const response = await axios.get(`${API_BASE_URL_PRODUCTS}/${id}`);
    return response.data;

    // --- Placeholder Data --- Remove this when implementing actual fetch
    /*
     console.log(`Fetching placeholder product with ID: ${id}`);
     const placeholderProduct = { // Mock data, replace with actual logic
        id: id,
        name: `Product ${id}`,
        price: parseInt(id) * 10,
        stock: Math.floor(Math.random() * 100) + 1,
        description: `Description for product ${id}`,
     };
     return placeholderProduct;
    */
    // --- End Placeholder Data ---
  } catch (error) {
    console.error(`Error in getProductById ${id}:`, error);
    throw error;
  }
};

// Function to create a new product
const createProduct = async (productData) => {
  try {
    // TODO: Replace with actual axios call to your product API
    const response = await axios.post(API_BASE_URL_PRODUCTS, productData);
    return response.data; // Assuming API returns the created product

    // --- Placeholder Create --- Remove this when implementing actual create
    /*
     console.log('Creating placeholder product:', productData);
     const createdProduct = { ...productData, id: `prod_${Math.random().toString(16).slice(2)}` }; // Assign a simple temporary ID
     return createdProduct;
    */
    // --- End Placeholder Create ---
  } catch (error) {
    console.error('Error in createProduct:', error);
    throw error;
  }
};

// Function to update a product by ID
const updateProduct = async (id, productData) => {
  try {
    // TODO: Replace with actual axios call to your product API
    const response = await axios.put(`${API_BASE_URL_PRODUCTS}/${id}`, productData);
    return response.status; // Assuming status indicates success for PUT

    // --- Placeholder Update --- Remove this when implementing actual update
    /*
    console.log(`Updating placeholder product with ID ${id}:`, productData);
    return 204; // Mock status code for success
    */
    // --- End Placeholder Update ---
  } catch (error) {
    console.error(`Error in updateProduct ${id}:`, error);
    throw error;
  }
};

// Function to delete a product by ID
const deleteProduct = async (id) => {
  try {
    // TODO: Replace with actual axios call to your product API
    const response = await axios.delete(`${API_BASE_URL_PRODUCTS}/${id}`);
    return response.status; // Assuming status indicates success for DELETE

    // --- Placeholder Delete --- Remove this when implementing actual delete
    /*
     console.log(`Deleting placeholder product with ID: ${id}`);
     return 204; // Mock status code for success
    */
    // --- End Placeholder Delete ---
  } catch (error) {
    console.error(`Error in deleteProduct ${id}:`, error);
    throw error;
  }
};

export const ProductService = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}; 