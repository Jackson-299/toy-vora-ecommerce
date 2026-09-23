
import { useNavigate } from "react-router-dom";

const ProfileOffcanvas = ({ show, handleClose }) => {
  const navigate = useNavigate();

  // Login time-la save panna email
  const email = localStorage.getItem("loginEmail") || "user@gmail.com";

  // Email-la @ ku munnaadi irukkura name
  const profileName = email.split("@")[0];

  const handleOrders = () => {
    handleClose();
    navigate("/orders");
  };

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div
      className={`offcanvas offcanvas-end ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{
        visibility: show ? "visible" : "hidden",
        width: "360px",
      }}
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title fw-bold">
          My Profile
        </h5>

        <button
          type="button"
          className="btn-close"
          onClick={handleClose}
        ></button>
      </div>

      <div className="offcanvas-body">

        {/* Profile */}
        <div className="text-center mb-4">
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: "80px",
              height: "80px",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            {profileName.charAt(0).toUpperCase()}
          </div>

          <h5 className="fw-bold mb-1 text-capitalize">
            {profileName}
          </h5>

          <p className="text-muted mb-0">
            {email}
          </p>
        </div>

        {/* Profile Options */}
        <div className="list-group">

          <button className="list-group-item list-group-item-action d-flex align-items-center gap-3">
            <i className="bi bi-person fs-5"></i>
            <span>My Account</span>
          </button>

          <button
            className="list-group-item list-group-item-action d-flex align-items-center gap-3"
            onClick={handleOrders}
          >
            <i className="bi bi-bag-check fs-5 text-success"></i>
            <span>Orders Successfully</span>
            <i className="bi bi-chevron-right ms-auto"></i>
          </button>

          <button className="list-group-item list-group-item-action d-flex align-items-center gap-3">
            <i className="bi bi-heart fs-5 text-danger"></i>
            <span>My Wishlist</span>
          </button>

          <button className="list-group-item list-group-item-action d-flex align-items-center gap-3">
            <i className="bi bi-gear fs-5"></i>
            <span>Settings</span>
          </button>

        </div>

        {/* Logout */}
        <button className="btn btn-outline-danger w-100 mt-4" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>

      </div>
    </div>
  );
};

export default ProfileOffcanvas;