import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">

        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-white mb-3">
              Toy<span className="text-primary">vora.</span>
            </h3>

            <p className="text-secondary mb-3" style={{ maxWidth: "360px" }}>
              Discover exciting toys and stylish accessories, carefully
              selected to make every shopping experience enjoyable.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-2">
              <a
                href="#"
                className="btn btn-outline-secondary rounded-3"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-secondary rounded-3"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-secondary rounded-3"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-secondary rounded-3"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2 col-md-3">
            <h6 className="fw-bold text-white mb-3">
              Quick Links
            </h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/dashboard"
                  className="text-secondary text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/toys"
                  className="text-secondary text-decoration-none"
                >
                  Toys
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/accessories"
                  className="text-secondary text-decoration-none"
                >
                  Accessories
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="text-secondary text-decoration-none"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Shopping */}
          <div className="col-6 col-lg-2 col-md-3">
            <h6 className="fw-bold text-white mb-3">
              Shopping
            </h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/toys"
                  className="text-secondary text-decoration-none"
                >
                  New Arrivals
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/toys"
                  className="text-secondary text-decoration-none"
                >
                  Best Sellers
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/accessories"
                  className="text-secondary text-decoration-none"
                >
                  Trending
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="text-secondary text-decoration-none"
                >
                  Offers & Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold text-white mb-3">
              Get In Touch
            </h6>

            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-geo-alt text-primary me-3 fs-5"></i>

              <div>
                <small className="text-secondary d-block">
                  LOCATION
                </small>
                <span className="text-light">
                  Coimbatore, Tamil Nadu
                </span>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-telephone text-primary me-3 fs-5"></i>

              <div>
                <small className="text-secondary d-block">
                  PHONE
                </small>
                <span className="text-light">
                  +91 98765 43210
                </span>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <i className="bi bi-envelope text-primary me-3 fs-5"></i>

              <div>
                <small className="text-secondary d-block">
                  EMAIL
                </small>
                <span className="text-light">
                  support@toynest.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-secondary small mb-0">
            © 2026 <span className="text-white fw-semibold">Toy<span className="text-primary">vora.</span></span>.
            All Rights Reserved.
          </p>

          <div className="d-flex gap-3">
            <Link
              to="/dashboard"
              className="text-secondary small text-decoration-none"
            >
              Privacy Policy
            </Link>

            <span className="text-secondary">|</span>

            <Link
              to="/dashboard"
              className="text-secondary small text-decoration-none"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;