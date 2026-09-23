
const Carousel = ({ items }) => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.image}
              className="d-block w-100"
              alt={item.title}
              style={{ height: "450px", objectFit: "cover" }}
            />

            <div className="carousel-caption d-flex flex-column align-items-start justify-content-center h-100 text-start">
              <h1 className="fw-bold">{item.title}</h1>
              <p className="fs-5">{item.description}</p>

              <button className="btn btn-primary px-4 py-2">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      {/* Next */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default Carousel;