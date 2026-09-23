import { Zap } from "lucide-react";

const Wishlist = ({
  wishlist,
  setWishlist,
  setCart,
  onBuyNow,
}) => {
  const removeFromWishlist = (id) => {
    setWishlist((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    setWishlist((prev) =>
      prev.filter((item) => item.id !== product.id)
    );
  };

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-5">
          <h4>Your wishlist is empty</h4>

          <p className="text-muted">
            Add some products to your wishlist.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {wishlist.map((product) => (
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              key={product.id}
            >
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

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

                  <small className="text-primary fw-semibold">
                    {product.brand}
                  </small>

                  <h5 className="fw-semibold mt-1">
                    {product.name}
                  </h5>

                  <div className="mb-3">
                    <span className="badge bg-warning text-dark">
                      ⭐ {product.rating}
                    </span>

                    <small className="text-muted ms-2">
                      ({product.reviews} reviews)
                    </small>
                  </div>

                  <div className="mb-3">
                    <span className="fs-5 fw-bold">
                      ₹{product.price}
                    </span>

                    <span className="text-muted text-decoration-line-through ms-2">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  {/* Buy Now */}
                  <button
                    onClick={() => onBuyNow(product)}
                    className="btn btn-dark w-100 rounded-pill mb-2"
                  >
                    <Zap size={16} className="me-1" />
                    Buy Now
                  </button>

                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary w-100 rounded-pill mb-2"
                  >
                    Add to Cart
                  </button>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="btn btn-outline-danger w-100 rounded-pill"
                  >
                    Remove
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;