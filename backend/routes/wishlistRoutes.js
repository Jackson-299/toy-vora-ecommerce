const express = require("express");

const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add Product to Wishlist
router.post("/", authMiddleware, addToWishlist);

// Get User Wishlist
router.get("/", authMiddleware, getWishlist);

// Remove Product from Wishlist
router.delete("/:id", authMiddleware, removeFromWishlist);

module.exports = router;