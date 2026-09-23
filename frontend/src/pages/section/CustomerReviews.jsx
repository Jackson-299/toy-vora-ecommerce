import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../ui/Card";

import {
  getReviews,
  updateReview,
  deleteReview,
} from "../../api/reviewApi";

import {
  setReviews,
  setLoading,
  setError,
} from "../../redux/reviewSlice";

import ReviewForm from "../../orderedform/ReviewForm";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.reviews.reviews);

  // Get Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        dispatch(setLoading(true));

        const data = await getReviews();

        dispatch(setReviews(data));
      } catch (error) {
        dispatch(
          setError(
            error.response?.data?.message ||
              "Failed to fetch reviews"
          )
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchReviews();
  }, [dispatch]);

  // Next Review
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous Review
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // New Review Created
  const handleReviewCreated = (newReview) => {
    dispatch(
      setReviews([...reviews, newReview])
    );

    setCurrentIndex(reviews.length);

    setShowForm(false);
  };

  // Edit Review
  const handleEdit = async (review) => {
    const newComment = window.prompt(
      "Edit your review",
      review.comment
    );

    if (!newComment || newComment.trim() === "") {
      return;
    }

    try {
      const response = await updateReview(review._id, {
        comment: newComment,
      });

      const updatedReviews = reviews.map((item) =>
        item._id === review._id
          ? response.review
          : item
      );

      dispatch(setReviews(updatedReviews));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to update review"
        )
      );
    }
  };

  // Delete Review
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteReview(id);

      const updatedReviews = reviews.filter(
        (review) => review._id !== id
      );

      dispatch(setReviews(updatedReviews));

      setCurrentIndex(0);
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to delete review"
        )
      );
    }
  };

  return (
    <section className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            What Our{" "}
            <span className="text-primary">
              Customers Say
            </span>
          </h2>

          <p className="text-muted mt-2">
            Real experiences from customers who love shopping
            with us.
          </p>

          {/* Write Review Button */}
          <button
            className="btn btn-primary mt-3"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Review Form" : "Write a Review"}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <ReviewForm
            onClose={() => setShowForm(false)}
            onReviewCreated={handleReviewCreated}
          />
        )}

        {/* Reviews */}
        {reviews.length > 0 && (
          <>
            {/* Review Card */}
            <div
              className="mx-auto"
              style={{ maxWidth: "1100px" }}
            >
              <div
                className="position-relative overflow-hidden"
                style={{ borderRadius: "16px" }}
              >
                <div
                  style={{
                    display: "flex",
                    transform: `translateX(-${
                      currentIndex * 100
                    }%)`,
                    transition:
                      "transform 0.6s ease-in-out",
                  }}
                >
                  {reviews.map((review) => (
                    <div
                      key={review._id}
                      className="w-100 flex-shrink-0"
                      style={{ minWidth: "100%" }}
                    >
                      <Card>
                        <div
                          className="row align-items-center"
                          style={{ minHeight: "250px" }}
                        >

                          {/* Review Content */}
                          <div className="col-lg-8 px-4 px-lg-5">
                            <div
                              className="mb-3"
                              style={{
                                fontSize: "55px",
                                lineHeight: "1",
                                fontWeight: "bold",
                              }}
                            >
                              “
                            </div>

                            <h4
                              className="fw-semibold"
                              style={{ lineHeight: "1.5" }}
                            >
                              {review.comment}
                            </h4>

                            {/* Edit & Delete */}
                            <div className="mt-4 ms-5">
                              <button
                                className="btn btn-outline-primary btn-sm me-2"
                                onClick={() =>
                                  handleEdit(review)
                                }
                              >
                                Edit
                              </button>

                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() =>
                                  handleDelete(
                                    review._id
                                  )
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </div>

                          {/* Customer Details */}
                          <div className="col-lg-4 text-center mt-4 mt-lg-0">

                            <div className="mb-3">
                              ⭐ {review.rating}/5
                            </div>

                            <h5 className="fw-bold mb-1">
                              {review.userName}
                            </h5>

                            <p className="text-muted mb-0">
                              Customer
                            </p>

                          </div>

                        </div>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Invisible Click Areas */}
                <div
                  onClick={handlePrevious}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "12%",
                    height: "100%",
                    cursor: "pointer",
                    zIndex: 5,
                  }}
                  title="Previous review"
                ></div>

                <div
                  onClick={handleNext}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "12%",
                    height: "100%",
                    cursor: "pointer",
                    zIndex: 5,
                  }}
                  title="Next review"
                ></div>
              </div>
            </div>

            {/* Small Indicator */}
            <div className="text-center mt-4">
              {reviews.map((review, index) => (
                <span
                  key={review._id}
                  className="d-inline-block rounded-circle mx-1"
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor:
                      currentIndex === index
                        ? "#0d6efd"
                        : "#d6d6d6",
                  }}
                ></span>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default CustomerReviews;