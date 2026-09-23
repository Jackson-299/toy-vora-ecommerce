const Orders = ({ orders, setOrders }) => {
  const cancelOrder = (indexToRemove) => {
    setOrders((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <section className="container py-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">
            My Orders 📦
          </h2>

          <p className="text-muted mb-0">
            View and manage your successfully placed orders.
          </p>
        </div>

        <span className="badge bg-success rounded-pill px-3 py-2">
          {orders.length} Orders
        </span>
      </div>

      {/* Empty Orders */}
      {orders.length === 0 ? (
        <div className="text-center py-5">

          <div className="mb-3">
            <i
              className="bi bi-bag-x text-muted"
              style={{ fontSize: "60px" }}
            ></i>
          </div>

          <h4 className="fw-semibold">
            No Orders Yet
          </h4>

          <p className="text-muted">
            Your successfully placed orders will appear here.
          </p>

        </div>
      ) : (

        /* Orders */
        <div className="row g-4">

          {orders.map((order, index) => {

            // Product details
            const product = order.product;

            // Quantity from Cart / Buy Now
            const quantity = product?.quantity || 1;

            // Total amount based on quantity
            const totalAmount =
              (product?.price || 0) * quantity;

            // Original total amount
            const totalOriginalPrice =
              (product?.originalPrice || 0) * quantity;

            return (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={index}
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                  {/* Product Image */}
                  <img
                    src={product?.image}
                    alt={product?.name || "Product"}
                    className="w-100"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-4">

                    {/* Status */}
                    <div className="d-flex justify-content-between align-items-center mb-3">

                      <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                        <i className="bi bi-check-circle me-1"></i>
                        Order Successfully
                      </span>

                      <small className="text-muted">
                        #{index + 1}
                      </small>

                    </div>

                    {/* Brand */}
                    <small className="text-primary fw-semibold">
                      {product?.brand}
                    </small>

                    {/* Product Name */}
                    <h5 className="fw-bold mt-1 mb-2">
                      {product?.name}
                    </h5>

                    {/* Rating */}
                    <div className="mb-3">

                      <span className="badge bg-warning text-dark">
                        ⭐ {product?.rating}
                      </span>

                      <small className="text-muted ms-2">
                        ({product?.reviews || 0} reviews)
                      </small>

                    </div>

                    {/* Quantity */}
                    <div className="mb-3">

                      <span className="fw-semibold">
                        Quantity:
                      </span>

                      <span className="ms-2 badge bg-primary">
                        {quantity}
                      </span>

                    </div>

                    {/* Price */}
                    <div className="mb-3">

                      <span className="fs-5 fw-bold text-dark">
                        ₹{totalAmount}
                      </span>

                      {product?.originalPrice && (
                        <span className="text-muted text-decoration-line-through ms-2">
                          ₹{totalOriginalPrice}
                        </span>
                      )}

                    </div>

                    {/* Customer Details */}
                    <div className="border-top pt-3 mb-3">

                      <small className="text-muted d-block mb-1">
                        <i className="bi bi-person me-2"></i>
                        Customer
                      </small>

                      <span className="fw-semibold">
                        {order.fullName}
                      </span>

                    </div>

                    {/* Order Date */}
                    <div className="border-top pt-3 mb-3">

                      <small className="text-muted d-block">
                        <i className="bi bi-calendar3 me-2"></i>
                        Order Date
                      </small>

                      <span className="fw-semibold">
                        {order.orderDate}
                      </span>

                    </div>

                    {/* Cancel Order */}
                    <button
                      type="button"
                      onClick={() => cancelOrder(index)}
                      className="btn btn-outline-danger w-100 rounded-pill"
                    >
                      <i className="bi bi-x-circle me-2"></i>
                      Cancel Order
                    </button>

                  </div>
                </div>
              </div>
            );
          })}

        </div>
      )}
    </section>
  );
};

export default Orders;