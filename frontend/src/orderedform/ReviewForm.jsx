import { useState } from "react";
import confetti from "canvas-confetti";

import { createReview } from "../api/reviewApi";

const ReviewForm = ({ onClose, onReviewCreated }) => {
  const [userName, setUserName] = useState("");
  const [productId, setProductId] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!userName || !productId || !rating || !comment) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const response = await createReview({
        productId: Number(productId),
        userName,
        rating: Number(rating),
        comment,
      });

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      onReviewCreated(response.review);

      setUserName("");
      setProductId("");
      setRating("");
      setComment("");

      onClose();
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to create review"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-sm p-4 mt-4">
      <h4 className="fw-bold mb-4">Write a Review</h4>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {/* Customer Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Your Name
          </label>

          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* Product ID */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Product ID
          </label>

          <input
            type="number"
            className="form-control"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter product ID"
          />
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Rating
          </label>

          <select
            className="form-select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ - 5</option>
            <option value="4">⭐⭐⭐⭐ - 4</option>
            <option value="3">⭐⭐⭐ - 3</option>
            <option value="2">⭐⭐ - 2</option>
            <option value="1">⭐ - 1</option>
          </select>
        </div>

        {/* Comment */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Your Review
          </label>

          <textarea
            className="form-control"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review"
          ></textarea>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="btn btn-primary me-2"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClose}
        >
          Cancel
        </button>

      </form>
    </div>
  );
};

export default ReviewForm;