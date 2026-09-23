import { useState } from "react";

const OrderForm = ({ show, product, onClose, onOrderSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "Cash on Delivery",
  });

  const [errors, setErrors] = useState({});

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10 digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6 digit pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const orderData = {
      ...formData,
      product: product,
      orderDate: new Date().toLocaleDateString(),
      orderStatus: "Order Successfully",
    };

    // Send order details to parent
    if (onOrderSuccess) {
      onOrderSuccess(orderData);
    }
  };

  // Popup close
  const handleClose = () => {
    setErrors({});

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      pincode: "",
      paymentMethod: "Cash on Delivery",
    });

    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1050 }}
      ></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1055 }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content border-0 shadow-lg rounded-4">

            {/* Header */}
            <div className="modal-header px-4 py-3">
              <div>
                <h5 className="modal-title fw-bold mb-1">
                  Complete Your Order
                </h5>

                <small className="text-muted">
                  Enter your delivery details
                </small>
              </div>

              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body p-4">

              {/* Product Preview */}
              {product && (
                <div className="card border-0 bg-light rounded-3 mb-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-3"
                        style={{
                          width: "75px",
                          height: "75px",
                          objectFit: "cover",
                        }}
                      />

                      <div className="flex-grow-1">
                        <h6 className="fw-bold mb-1">
                          {product.name}
                        </h6>

                        <small className="text-muted d-block">
                          {product.brand}
                        </small>

                        <span className="fw-bold text-primary">
                          ₹{product.discountPrice}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  {/* Full Name */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />

                    {errors.fullName && (
                      <div className="invalid-feedback">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      maxLength="10"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Enter 10 digit number"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Address */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Delivery Address
                    </label>

                    <textarea
                      name="address"
                      rows="3"
                      className={`form-control ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your complete address"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>

                    {errors.address && (
                      <div className="invalid-feedback">
                        {errors.address}
                      </div>
                    )}
                  </div>

                  {/* City */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      className={`form-control ${
                        errors.city ? "is-invalid" : ""
                      }`}
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleChange}
                    />

                    {errors.city && (
                      <div className="invalid-feedback">
                        {errors.city}
                      </div>
                    )}
                  </div>

                  {/* Pincode */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      maxLength="6"
                      className={`form-control ${
                        errors.pincode ? "is-invalid" : ""
                      }`}
                      placeholder="Enter 6 digit pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />

                    {errors.pincode && (
                      <div className="invalid-feedback">
                        {errors.pincode}
                      </div>
                    )}
                  </div>

                  {/* Payment */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Payment Method
                    </label>

                    <div className="border rounded-3 p-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="Cash on Delivery"
                          checked={
                            formData.paymentMethod ===
                            "Cash on Delivery"
                          }
                          onChange={handleChange}
                        />

                        <label className="form-check-label">
                          <i className="bi bi-cash-stack me-2"></i>
                          Cash on Delivery
                        </label>
                      </div>

                      <div className="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="Online Payment"
                          checked={
                            formData.paymentMethod ===
                            "Online Payment"
                          }
                          onChange={handleChange}
                        />

                        <label className="form-check-label">
                          <i className="bi bi-credit-card me-2"></i>
                          Online Payment
                        </label>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end gap-2 mt-4">

                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-pill px-4"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4"
                  >
                    <i className="bi bi-check-circle me-2"></i>
                    Place Order
                  </button>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderForm;