const Review = require("../models/reviewModel");

// Create Review
const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json({
      message: "Review created successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create review",
      error: error.message,
    });
  }
};

// Get All Reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get reviews",
      error: error.message,
    });
  }
};

// Get Reviews by Product ID
const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({
      productId: req.params.productId,
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get product reviews",
      error: error.message,
    });
  }
};

// Update Review
const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review updated successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update review",
      error: error.message,
    });
  }
};

// Delete Review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete review",
      error: error.message,
    });
  }
};

module.exports = {
  createReview,
  getReviews,
  getReviewsByProduct,
  updateReview,
  deleteReview,
};