const Wishlist = require("../models/wishlistModel");

// Add Product to Wishlist
const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    const existingItem = await Wishlist.findOne({
      userId: req.user.userId,
      productId,
    });

    if (existingItem) {
      return res.status(400).json({
        message: "Product already in wishlist",
      });
    }

    const wishlistItem = await Wishlist.create({
      userId: req.user.userId,
      productId,
    });

    res.status(201).json({
      message: "Product added to wishlist",
      wishlist: wishlistItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add product to wishlist",
      error: error.message,
    });
  }
};

// Get User Wishlist
const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      userId: req.user.userId,
    });

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get wishlist",
      error: error.message,
    });
  }
};

// Remove Product from Wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const wishlistItem = await Wishlist.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!wishlistItem) {
      return res.status(404).json({
        message: "Wishlist item not found",
      });
    }

    res.status(200).json({
      message: "Product removed from wishlist",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove product from wishlist",
      error: error.message,
    });
  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
};