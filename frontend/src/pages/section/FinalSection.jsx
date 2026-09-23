import Card from "../../ui/Card";

const FinalSection = () => {
  const features = [
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
      icon: "bi-cart-check",
      title: "Easy Shopping",
      description:
        "Find your favorite toys and accessories quickly with a simple and smooth shopping experience.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      icon: "bi-truck",
      title: "Fast Delivery",
      description:
        "Get your orders delivered safely and quickly right to your doorstep.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800",
      icon: "bi-shield-check",
      title: "Secure Shopping",
      description:
        "Shop confidently with a secure and reliable experience from browsing to checkout.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800",
      icon: "bi-headset",
      title: "Customer Support",
      description:
        "Our customer support is here to help whenever you need assistance with your order.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">

        {/* Main Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">
            Everything You Need for a
            <br />
            <span className="text-primary">Better Shopping Experience</span>
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Shop your favorite products with ease, enjoy reliable service,
            and experience a simple way to discover something you love.
          </p>
        </div>

        {/* Four Feature Cards */}
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-12 col-sm-6 col-lg-3" key={feature.title}>
              <Card>
                <div className="text-center">

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="img-fluid rounded-3 mb-4"
                    style={{
                      width: "100%",
                      height: "170px",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3 bg-primary bg-opacity-10 text-primary rounded-circle"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <i className={`bi ${feature.icon} fs-4`}></i>
                  </div>

                  <h5 className="fw-bold mb-2">
                    {feature.title}
                  </h5>

                  <p className="text-muted small mb-0">
                    {feature.description}
                  </p>

                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Quote + Button */}
        <div className="text-center mt-5 pt-4">

          <div className="mb-3">
            <i
              className="bi bi-quote text-primary"
              style={{ fontSize: "45px" }}
            ></i>
          </div>

          <h3
            className="fw-bold mx-auto"
            style={{ maxWidth: "750px", lineHeight: "1.5" }}
          >
            "Great products, simple shopping, and a better experience —
            everything you need is just a click away."
          </h3>

          <p className="text-muted mt-3">
            Discover something you love and make your next purchase special.
          </p>

          <button className="btn btn-primary px-4 py-3 fw-semibold rounded-3 mt-2">
            <i className="bi bi-bag me-2"></i>
            Start Shopping
          </button>

        </div>

      </div>
    </section>
  );
};

export default FinalSection;