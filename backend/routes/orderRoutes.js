const express = require("express");

const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Order
router.post("/", authMiddleware, createOrder);

// Get User Orders
router.get("/", authMiddleware, getOrders);

// Get Single Order
router.get("/:id", authMiddleware, getOrderById);

// Update Order Status
router.patch("/:id", authMiddleware, updateOrderStatus);

module.exports = router;