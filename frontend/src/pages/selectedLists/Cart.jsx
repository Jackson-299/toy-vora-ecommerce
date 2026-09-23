import { Zap } from "lucide-react";


const Cart = ({ cart, setCart, onBuyNow }) => {
  // Remove Product
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                (item.quantity || 1) - 1,
                1
              ),
            }
          : item
      )
    );
  };

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">My Cart 🛒</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h4>Your cart is empty</h4>

          <p className="text-muted">
            Add some products to your cart.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {cart.map((product, index) => {
            const quantity = product.quantity || 1;

            const totalPrice =
              product.price * quantity;

            const totalOriginalPrice =
              product.originalPrice * quantity;

            return (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                key={`${product.id}-${index}`}
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-100"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-4">

                    {/* Brand */}
                    <small className="text-primary fw-semibold">
                      {product.brand}
                    </small>

                    {/* Product Name */}
                    <h5 className="fw-semibold mt-1">
                      {product.name}
                    </h5>

                    {/* Rating */}
                    <div className="mb-3">
                      <span className="badge bg-warning text-dark">
                        ⭐ {product.rating}
                      </span>

                      <small className="text-muted ms-2">
                        ({product.reviews} reviews)
                      </small>
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                      <span className="fs-5 fw-bold">
                        ₹{totalPrice}
                      </span>

                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{totalOriginalPrice}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="d-flex align-items-center justify-content-between mb-3">

                      <span className="fw-semibold">
                        Quantity
                      </span>

                      <div className="d-flex align-items-center border rounded-pill">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          className="btn btn-sm px-3"
                          disabled={quantity === 1}
                        >
                          −
                        </button>

                        <span className="px-2 fw-semibold">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          className="btn btn-sm px-3"
                        >
                          +
                        </button>

                      </div>
                    </div>

                    {/* Buy Now */}
                    <button
                    onClick={() => onBuyNow(product)}
                    className="btn btn-dark w-100 rounded-pill mb-2"
                  >
                    <Zap size={16} className="me-1" />
                    Buy Now
                  </button>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromCart(product.id)
                      }
                      className="btn btn-outline-danger w-100 rounded-pill"
                    >
                      Remove from Cart
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

export default Cart;