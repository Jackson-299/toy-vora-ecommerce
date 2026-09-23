import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TrendingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Get products from Redux
  const products = useSelector((state) => state.products.products);

  // Get highest-rated 12 products for Trending
  const trendingProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 15);

  // 5 cards visible at desktop
  const cardsPerView = 5;

  const maxIndex = Math.max(
    trendingProducts.length - cardsPerView,
    0
  );

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  // Auto Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="container-fluid py-4">

      {/* Section Heading */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <div>
          <h3 className="fw-bold mb-0">
            Trending Products / Discount
          </h3>

          <p className="text-muted small mb-0">
            Grab the latest deals at amazing prices
          </p>
        </div>

        <button className="btn btn-outline-dark btn-sm rounded-pill px-3">
          View All
        </button>

      </div>

      {/* Carousel Wrapper */}
      <div
        className="position-relative overflow-hidden"
        ref={carouselRef}
      >

        {/* Product Track */}
        <div
          className="d-flex"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >

          {/* Deals / Offer Card */}
          <div
            className="flex-shrink-0 px-2"
            style={{ width: "20%" }}
          >
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              style={{
                background: "#fff49c",
                borderRadius: "18px",
                padding: "12px",
                minHeight: "340px",
              }}
            >
              <div
                className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  border: "1px solid #d8a900",
                  borderRadius: "30px",
                  background: "#fff8df",
                  padding: "20px 10px",
                }}
              >
                <h1
                  className="fw-bold mb-1"
                  style={{
                    fontSize: "38px",
                    color: "#24103d",
                  }}
                >
                  Deals
                </h1>

                <h3
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "28px",
                    color: "#111",
                  }}
                >
                  Under
                </h3>

                <div
                  className="px-3 py-2 rounded-3 shadow-sm"
                  style={{
                    background: "#fff27a",
                  }}
                >
                  <h3
                    className="fw-bold mb-0"
                    style={{
                      color: "#24103d",
                    }}
                  >
                    ₹7,000/m
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Product Cards */}
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 px-2"
              style={{
                width: "20%",
              }}
            >
              <div
                className="card border-0 h-100 overflow-hidden"
                style={{
                  borderRadius: "16px",
                  background: "#fff8d6",
                }}
              >

                {/* Product Image */}
                <div
                  className="position-relative"
                  style={{
                    height: "220px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                  />

                  {/* Discount */}
                  <span className="position-absolute top-0 start-0 m-2 badge rounded-pill bg-danger">
                    {product.discount}% OFF
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-3">

                  <h6
                    className="fw-bold mb-2 text-truncate"
                    title={product.name}
                  >
                    {product.name}
                  </h6>

                  <div
                    className="text-center fw-bold py-1 mb-2"
                    style={{
                      background: "#ff7100",
                      color: "white",
                    }}
                  >
                    {product.offer}
                  </div>

                  <div className="text-center">

                    <span className="fw-bold">
                      ₹{product.price}
                    </span>

                    <span className="text-muted text-decoration-line-through ms-2 small">
                      ₹{product.originalPrice}
                    </span>

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Previous Button */}
        <button
          onClick={previousSlide}
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y rounded-circle shadow"
          style={{
            width: "42px",
            height: "42px",
            zIndex: 2,
          }}
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y rounded-circle shadow"
          style={{
            width: "42px",
            height: "42px",
            zIndex: 2,
          }}
        >
          &#8250;
        </button>

      </div>

    </section>
  );
};

export default TrendingProducts;