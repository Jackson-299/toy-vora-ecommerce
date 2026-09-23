import axios from "axios";

const API_URL = "https://backend-y16b.vercel.app/reviews";

// Get Reviews
export const getReviews = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Create Review
export const createReview = async (reviewData) => {
  const response = await axios.post(API_URL, reviewData);

  return response.data;
};

// Update Review
export const updateReview = async (id, reviewData) => {
  const response = await axios.patch(
    `${API_URL}/${id}`,
    reviewData
  );

  return response.data;
};

// Delete Review
export const deleteReview = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};