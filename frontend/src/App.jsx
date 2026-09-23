import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import OTP from "./auth/OTP";

import Dashboard from "./pages/Dashboard";
import Wishlist from "./pages/selectedLists/Wishlist";
import Cart from "./pages/selectedLists/Cart";

import ToysPage from "./pages/subtab/ToysPage";
import AccessoriesPage from "./pages/subtab/AccessoriesPage";

import Orders from "./pages/orderpage/Orders";
import OrderSuccess from "./pages/orderpage/OrderSuccess";

import OrderForm from "./orderedform/OrderForm";

import ProductForm from "./orderedform/ProductForm";

import { getProducts } from "./api/productApi";
import {
  setProducts,
  setLoading,
  setError,
} from "./redux/productSlice";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setLoading(true));

        const data = await getProducts();

        dispatch(setProducts(data));
      } catch (error) {
        dispatch(
          setError(
            error.response?.data?.message ||
              "Failed to fetch products"
          )
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowOrderForm(true);
  };

  const handleOrderSuccess = (orderData) => {
    setOrders((prev) => [...prev, orderData]);

    setShowOrderForm(false);
    setShowSuccess(true);
  };

  const handleViewOrders = () => {
    setShowSuccess(false);
    navigate("/orders");
  };

  return (
    <>
      <Routes>

        <Route
          path="/"
          element={<Signup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/otp"
          element={<OTP />}
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              setOrders={setOrders}
              onBuyNow={handleBuyNow}
            />
          }
        />

        <Route
          path="/toys"
          element={
            <ToysPage
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              onBuyNow={handleBuyNow}
            />
          }
        />

        <Route
          path="/accessories"
          element={
            <AccessoriesPage
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              onBuyNow={handleBuyNow}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              onBuyNow={handleBuyNow}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              onBuyNow={handleBuyNow}
            />
          }
        />

        <Route
          path="/orders"
          element={
            <Orders
              orders={orders}
              setOrders={setOrders}
            />
          }
        />

        {/* Add Product */}
        <Route
          path="/add-product"
          element={<ProductForm />}
        />

      </Routes>

      <OrderForm
        show={showOrderForm}
        product={selectedProduct}
        onClose={() => setShowOrderForm(false)}
        onOrderSuccess={handleOrderSuccess}
      />

      <OrderSuccess
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        onViewOrders={handleViewOrders}
      />
    </>
  );
}

export default App;