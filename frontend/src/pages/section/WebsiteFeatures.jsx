import Card from "../../ui/Card";

const WebsiteFeatures = () => {
  const features = [
    {
      icon: "📱",
      title: "Responsive Shopping",
      description:
        "Enjoy a smooth shopping experience across mobile, tablet, and desktop devices.",
    },
    {
      icon: "🛍️",
      title: "Wide Product Collection",
      description:
        "Explore a wide range of trendy accessories and exciting toys for everyone.",
    },
    {
      icon: "🔍",
      title: "Easy Product Search",
      description:
        "Find your favorite products quickly with simple search and organized categories.",
    },
    {
      icon: "⭐",
      title: "Ratings & Reviews",
      description:
        "Check product ratings and customer reviews before making your purchase.",
    },
    {
      icon: "❤️",
      title: "Wishlist",
      description:
        "Save your favorite products and easily find them whenever you want to shop.",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      description:
        "Shop with confidence through a simple, reliable, and secure shopping experience.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <div className="mb-5">
          <h2 className="fw-bold display-5">
            Everything you need
            <br />
            <span className="text-primary">for better shopping.</span>
          </h2>

          <p className="text-muted mt-3" style={{ maxWidth: "600px" }}>
            Discover useful features designed to make your shopping experience
            simple, convenient, and enjoyable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6" key={index}>
              <Card>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>

                    <p className="text-muted mb-0">
                      {feature.description}
                    </p>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center bg-light rounded-circle flex-shrink-0 ms-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      fontSize: "25px",
                    }}
                  >
                    {feature.icon}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;