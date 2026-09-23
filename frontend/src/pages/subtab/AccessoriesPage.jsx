import { useSelector } from "react-redux";
import { Heart, ShoppingCart, Eye, Zap, Star } from "lucide-react";

import Header from "../section/Header";
import Footer from "../section/Footer";

const AccessoriesPage = ({
  wishlist,
  setWishlist,
  setCart,
  onBuyNow,
}) => {
  // Get products from Redux
  const products = useSelector((state) => state.products.products);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const quickView = (product) => {
    alert(`Quick View: ${product.name}`);
  };

  // Get only Accessories products
  const accessoryProducts = products.filter(
    (product) => product.category === "Accessories"
  );

  return (
    <>
      <Header />

      <section className="container py-5">

        {/* Page Heading */}
        <div className="mb-5">
          <h2 className="fw-bold mb-2">Accessories</h2>

          <p className="text-muted mb-0">
            Explore smart, stylish and useful accessories for your everyday needs
          </p>
        </div>

        {/* Product Cards */}
        <div className="row g-4">
          {accessoryProducts.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={product.id}
            >
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                {/* Product Image */}
                <div className="position-relative bg-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-100"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Discount */}
                  <span className="position-absolute top-0 start-0 m-3 badge bg-danger rounded-pill px-3 py-2">
                    {product.discount}% OFF
                  </span>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`position-absolute top-0 end-0 m-3 btn rounded-circle shadow-sm ${
                      wishlist.some((item) => item.id === product.id)
                        ? "btn-danger text-white"
                        : "btn-light"
                    }`}
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <Heart
                      size={18}
                      fill={
                        wishlist.some((item) => item.id === product.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                </div>

                {/* Product Details */}
                <div className="card-body p-4 d-flex flex-column">

                  <small className="text-primary fw-semibold">
                    {product.brand}
                  </small>

                  <h5 className="fw-semibold mt-1 mb-2">
                    {product.name}
                  </h5>

                  {/* Rating */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-warning text-dark">
                      <Star size={13} fill="currentColor" />{" "}
                      {product.rating}
                    </span>

                    <small className="text-muted">
                      ({product.reviews} reviews)
                    </small>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <span className="fs-5 fw-bold text-dark">
                      ₹{product.price}
                    </span>

                    <span className="text-muted text-decoration-line-through ms-2">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto">

                    <div className="d-flex gap-2 mb-2">

                      {/* Add To Cart */}
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary flex-grow-1 rounded-pill"
                      >
                        <ShoppingCart size={16} className="me-1" />
                        Add to Cart
                      </button>

                      {/* Quick View */}
                      <button
                        onClick={() => quickView(product)}
                        className="btn btn-outline-secondary rounded-circle"
                        style={{
                          width: "42px",
                          height: "42px",
                        }}
                        title="Quick View"
                      >
                        <Eye size={17} />
                      </button>

                    </div>

                    {/* Buy Now */}
                    <button
                      onClick={() => onBuyNow(product)}
                      className="btn btn-dark w-100 rounded-pill"
                    >
                      <Zap size={16} className="me-1" />
                      Buy Now
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
};

export default AccessoriesPage;