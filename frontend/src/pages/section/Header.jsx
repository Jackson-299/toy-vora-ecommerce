import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Search,
  User,
  Plus,
  ArrowDownUp,
} from "lucide-react";

import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ProfileOffcanvas from "../subtab/ProfileOffcanvas";

import {
  searchProducts,
  getProducts,
  sortProducts,
} from "../../api/productApi";

import {
  setProducts,
  setLoading,
  setError,
} from "../../redux/productSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch] = useState("");

  // Search Products
  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearch(value);

    try {
      dispatch(setLoading(true));
      dispatch(setError(""));

      if (!value.trim()) {
        const data = await getProducts();

        dispatch(setProducts(data));
        return;
      }

      const data = await searchProducts(value);

      dispatch(setProducts(data));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to search products"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Sort Products
  const handleSort = async (sortType) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(""));

      const data = await sortProducts(sortType);

      dispatch(setProducts(data));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to sort products"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
        <div className="container-fluid px-4 py-2 d-flex align-items-center justify-content-between flex-nowrap">
          {/* Logo */}
          <Link
            to="/dashboard"
            className="navbar-brand d-flex align-items-center gap-2 fw-bold text-dark flex-shrink-0 mb-0"
          >
            <span className="bg-primary text-white rounded-3 px-2 py-1">
              🛍️
            </span>

            <h3>
              <span>
                Toy<span className="text-primary">vora.</span>
              </span>
            </h3>
          </Link>

          {/* Menu */}
          <div className="d-none d-lg-flex align-items-center gap-4 mx-auto">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-option ${isActive ? "active" : ""}`
              }
            >
              <i className="bi bi-house-door me-2"></i>
              Home
            </NavLink>

            <NavLink
              to="/toys"
              className={({ isActive }) =>
                `nav-option ${isActive ? "active" : ""}`
              }
            >
              <i className="bi bi-controller me-2"></i>
              Toys
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                `nav-option ${isActive ? "active" : ""}`
              }
            >
              <i className="bi bi-headphones me-2"></i>
              Accessories
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            {/* Search */}
            <div
              className="position-relative d-none d-xl-block flex-shrink-0"
              style={{ width: "240px" }}
            >
              <Search
                size={16}
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                style={{ pointerEvents: "none" }}
              />

              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={handleSearch}
                className="form-control ps-5 rounded-pill bg-light border"
                style={{
                  height: "38px",
                  fontSize: "0.9rem",
                }}
              />
            </div>

            {/* Sort */}
            <div className="dropdown">
              <button
                className="btn btn-light border rounded-pill d-flex align-items-center gap-2 px-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ height: "38px" }}
              >
                <ArrowDownUp size={16} />
                <span className="d-none d-xl-inline">Sort</span>
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("priceLowToHigh")}
                  >
                    Price: Low to High
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("priceHighToLow")}
                  >
                    Price: High to Low
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("ratingHighToLow")}
                  >
                    Rating: High to Low
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("nameAZ")}
                  >
                    Name: A - Z
                  </button>
                </li>
              </ul>
            </div>

            {/* Add Product */}
            <span title="Add Product">
              <Button
                onClick={() => navigate("/add-product")}
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              >
                <Plus size={18} />
              </Button>
            </span>

            {/* Wishlist */}
            <span title="Add Wishlist">
              <Button
                onClick={() => navigate("/wishlist")}
                className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              >
                <Heart size={18} />
              </Button>
            </span>

            {/* Cart */}
            <span title="Add Cart">
              <Button
                onClick={() => navigate("/cart")}
                className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              >
                <ShoppingCart size={18} />
              </Button>
            </span>

            {/* User */}
            <span title="View My Profile">
              <Button
                className="btn btn-primary rounded-pill px-3 flex-shrink-0"
                style={{ height: "38px" }}
                onClick={() => setShowProfile(true)}
              >
                <span
                  className="d-flex align-items-center justify-content-center gap-1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <User size={16} />
                  <span>Account</span>
                </span>
              </Button>
            </span>
          </div>
        </div>
      </nav>

      {/* Profile Offcanvas */}
      <ProfileOffcanvas
        show={showProfile}
        handleClose={() => setShowProfile(false)}
      />
    </>
  );
};

export default Header;