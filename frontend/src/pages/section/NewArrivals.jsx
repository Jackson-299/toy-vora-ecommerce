import Card from "../../ui/Card";
import "../../App.css";
import { useSelector } from "react-redux";

const NewArrivals = () => {
  // Get products from Redux
  const products = useSelector((state) => state.products.products);

  // Show first 12 products for New Arrivals
  const newArrivalProducts = products.slice(0, 15);

  // Get unique brands from MongoDB products
  const brands = [
    ...new Map(
      products.map((product) => [
        product.brand,
        {
          id: product.brand,
          name: product.brand,
          image: product.image,
        },
      ])
    ).values(),
  ];

  const productItems = [
    ...newArrivalProducts,
    ...newArrivalProducts,
  ];

  const brandItems = [...brands, ...brands];

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid px-0">

        {/* ================= NEW ARRIVALS ================= */}
        <div className="mb-5">

          <div className="container mb-4">
            <h2 className="fw-bold mb-2">
              New Arrivals &{" "}
              <span className="text-primary">Best Sellers</span>
            </h2>

            <p className="text-muted mb-0">
              Discover the latest products and customer favorites.
            </p>
          </div>

          <div className="carousel-wrapper">
            <div className="product-track">

              {productItems.map((product, index) => (
                <div
                  className="small-product-card"
                  key={`${product.id}-${index}`}
                >
                  {index === 0 ? (
                    <div className="carousel-banner">

                      <span className="badge bg-primary mb-2">
                        NEW COLLECTION
                      </span>

                      <h4 className="fw-bold">
                        Fresh Picks
                      </h4>

                      <p className="small mb-0">
                        Explore our newest and most-loved products.
                      </p>

                    </div>
                  ) : (
                    <Card>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="carousel-product-img"
                      />

                      <h6 className="fw-semibold text-center mt-3 mb-0">
                        {product.name}
                      </h6>

                    </Card>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= BRAND PARTNERS ================= */}
        <div>

          <div className="container mb-4">
            <h2 className="fw-bold mb-2">
              Our Trusted{" "}
              <span className="text-primary">Brand Partners</span>
            </h2>

            <p className="text-muted mb-0">
              Bringing you quality products from brands you can trust.
            </p>
          </div>

          <div className="carousel-wrapper">
            <div className="brand-track">

              {brandItems.map((brand, index) => (
                <div
                  className="small-brand-card"
                  key={`${brand.id}-${index}`}
                >
                  {index === 0 ? (
                    <div className="carousel-banner">

                      <span className="badge bg-dark mb-2">
                        OUR PARTNERS
                      </span>

                      <h4 className="fw-bold">
                        Trusted Brands
                      </h4>

                      <p className="small mb-0">
                        Quality products from reliable brand partners.
                      </p>

                    </div>
                  ) : (
                    <Card>

                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="carousel-brand-img"
                      />

                      <h6 className="fw-semibold text-center mt-3 mb-0">
                        {brand.name}
                      </h6>

                    </Card>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;