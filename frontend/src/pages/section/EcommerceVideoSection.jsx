
const EcommerceVideoSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-5 col-md-6">
            <h2 className="fw-bold mb-4">
              Smart Shopping Made Simple
            </h2>

            <p className="text-secondary fs-5">
              Discover a simple and enjoyable way to shop online.
              Explore different products, find your favourites, and
              experience a smooth shopping journey from browsing to checkout.
            </p>

            <p className="text-secondary">
              Our e-commerce platform brings products, offers, and
              convenient shopping features together in one place.
            </p>
          </div>

          {/* Right Video */}
          <div className="col-lg-7 col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/7sjvua4VjzE"
                title="E-Commerce Website Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceVideoSection;