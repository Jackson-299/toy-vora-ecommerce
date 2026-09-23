const Cart = require("../models/cartModel");

// Add Product to Cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const existingCartItem = await Cart.findOne({
      userId: req.user.userId,
      productId,
    });

    if (existingCartItem) {
      existingCartItem.quantity += quantity || 1;
      await existingCartItem.save();

      return res.status(200).json({
        message: "Cart quantity updated",
        cart: existingCartItem,
      });
    }

    const cartItem = await Cart.create({
      userId: req.user.userId,
      productId,
      quantity: quantity || 1,
    });

    res.status(201).json({
      message: "Product added to cart",
      cart: cartItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add product to cart",
      error: error.message,
    });
  }
};

// Get User Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      userId: req.user.userId,
    });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get cart",
      error: error.message,
    });
  }
};

// Update Cart Quantity
const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cartItem = await Cart.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.userId,
      },
      { quantity },
      { new: true, runValidators: true }
    );

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      message: "Cart quantity updated",
      cart: cartItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart",
      error: error.message,
    });
  }
};

// Remove Product from Cart
const removeFromCart = async (req, res) => {
  try {
    const cartItem = await Cart.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      message: "Product removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove product from cart",
      error: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  updateCartQuantity,
  removeFromCart,
};