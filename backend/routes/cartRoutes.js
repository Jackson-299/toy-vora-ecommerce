const express = require("express");

const {
  addToCart,
  getCart,
  updateCartQuantity,
  removeFromCart,
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add Product to Cart
router.post("/", authMiddleware, addToCart);

// Get User Cart
router.get("/", authMiddleware, getCart);

// Update Cart Quantity
router.patch("/:id", authMiddleware, updateCartQuantity);

// Remove Product from Cart
router.delete("/:id", authMiddleware, removeFromCart);

module.exports = router;