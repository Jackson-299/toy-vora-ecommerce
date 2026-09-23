const express = require("express");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  sortProducts,
} = require("../controllers/productController");

const router = express.Router();

// Create Product
router.post("/", createProduct);

// Get All Products
router.get("/", getProducts);

// Search Products
router.get("/search", searchProducts);

// Sort Products
router.get("/sort", sortProducts);

// Get Single Product
router.get("/:id", getProductById);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;