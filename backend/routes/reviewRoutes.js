const express = require("express");

const {
  createReview,
  getReviews,
  getReviewsByProduct,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const router = express.Router();

// Create Review
router.post("/", createReview);

// Get All Reviews
router.get("/", getReviews);

// Get Reviews by Product ID
router.get("/product/:productId", getReviewsByProduct);

// Update Review
router.patch("/:id", updateReview);

// Delete Review
router.delete("/:id", deleteReview);

module.exports = router;