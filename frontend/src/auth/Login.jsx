import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Email validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Password validation
    if (!password) {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email: email.trim(),
          password,
        }
      );

      // Store JWT token
      localStorage.setItem("token", response.data.token);

      // Store user details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Go to OTP page
      localStorage.setItem("loginEmail", email.trim());
      navigate("/otp");

    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100">

        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200"
            alt="Login"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-75">

            <Card>
              <h3 className="text-center mb-4">Welcome Back</h3>

              <form onSubmit={handleLogin}>

                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                  <p className="text-danger">{error}</p>
                )}

                <Button type="submit">
                  Login
                </Button>

              </form>

              <p className="text-center mt-3 mb-0">
                Don't have an account?{" "}
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Signup
                </span>
              </p>

            </Card>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;