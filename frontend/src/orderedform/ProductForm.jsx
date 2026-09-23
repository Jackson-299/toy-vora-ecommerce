import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createProduct } from "../api/productApi";
import { setProducts } from "../redux/productSlice";

const ProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  const [formData, setFormData] = useState({
    id: "",
    image: "",
    name: "",
    brand: "",
    category: "",
    rating: "",
    reviews: "",
    originalPrice: "",
    price: "",
    discount: "",
    offer: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generate Product ID
  const generateProductId = () => {
    if (!products.length) {
      return 1;
    }

    const maxId = Math.max(
      ...products.map(
        (product) => Number(product.id) || 0
      )
    );

    return maxId + 1;
  };

  // Generate Working Image URL
  const generateImageUrl = (productName, category, productId) => {
  return `https://picsum.photos/seed/toyvora-${productId}/600/600`;
};

  // Submit Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !formData.name ||
      !formData.brand ||
      !formData.category ||
      !formData.rating ||
      !formData.reviews ||
      !formData.originalPrice ||
      !formData.price ||
      !formData.discount
    ) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // Generate Product ID
      const generatedId = generateProductId();

      // Generate Working Image URL
      const generatedImage = generateImageUrl(
        formData.name,
        formData.category,
        generatedId
      );

      const response = await createProduct({
        id: generatedId,
        image: generatedImage,
        name: formData.name,
        brand: formData.brand,
        category: formData.category,
        rating: Number(formData.rating),
        reviews: Number(formData.reviews),
        originalPrice: Number(formData.originalPrice),
        price: Number(formData.price),
        discount: Number(formData.discount),
        offer: formData.offer,
      });

      // Get newly created product
      const newProduct = response.product;

      // Update Redux
      dispatch(
        setProducts([
          ...products,
          newProduct,
        ])
      );

      alert("Product added successfully");

      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to add product"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">

              {/* Heading */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0">
                  Add Product
                </h3>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/dashboard")}
                >
                  Back
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* Product ID */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Product ID
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    value={generateProductId()}
                    readOnly
                  />
                </div>

                {/* Image */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Image URL
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={
                      formData.name && formData.category
                        ? generateImageUrl(
                            formData.name,
                            formData.category,
                            generateProductId()
                          )
                        : "Auto-generated after entering product name and category"
                    }
                    readOnly
                  />
                </div>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                  />
                </div>

                {/* Brand */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Brand
                  </label>

                  <input
                    type="text"
                    name="brand"
                    className="form-control"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Enter brand"
                  />
                </div>

                {/* Category */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Category
                  </label>

                  <select
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select Category
                    </option>

                    <option value="Toys">
                      Toys
                    </option>

                    <option value="Accessories">
                      Accessories
                    </option>
                  </select>
                </div>

                <div className="row">

                  {/* Rating */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Rating
                    </label>

                    <input
                      type="number"
                      name="rating"
                      className="form-control"
                      value={formData.rating}
                      onChange={handleChange}
                      placeholder="0 - 5"
                      min="0"
                      max="5"
                      step="0.1"
                    />
                  </div>

                  {/* Reviews */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Reviews
                    </label>

                    <input
                      type="number"
                      name="reviews"
                      className="form-control"
                      value={formData.reviews}
                      onChange={handleChange}
                      placeholder="Number of reviews"
                      min="0"
                    />
                  </div>

                </div>

                <div className="row">

                  {/* Original Price */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Original Price
                    </label>

                    <input
                      type="number"
                      name="originalPrice"
                      className="form-control"
                      value={formData.originalPrice}
                      onChange={handleChange}
                      placeholder="Enter original price"
                      min="0"
                    />
                  </div>

                  {/* Price */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Selling Price
                    </label>

                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Enter selling price"
                      min="0"
                    />
                  </div>

                </div>

                {/* Discount */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Discount (%)
                  </label>

                  <input
                    type="number"
                    name="discount"
                    className="form-control"
                    value={formData.discount}
                    onChange={handleChange}
                    placeholder="Enter discount percentage"
                    min="0"
                    max="100"
                  />
                </div>

                {/* Offer */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Offer
                  </label>

                  <input
                    type="text"
                    name="offer"
                    className="form-control"
                    value={formData.offer}
                    onChange={handleChange}
                    placeholder="Example: Extra 10% Off"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Adding Product..."
                    : "Add Product"}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;