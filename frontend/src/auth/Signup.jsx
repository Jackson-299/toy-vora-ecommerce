import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Username validation
    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

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

    // Confirm password validation
    if (!confirmPassword) {
      setError("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8000/auth/register", {
        username: username.trim(),
        email: email.trim(),
        password,
      });

      navigate("/login");
    } catch (error) {
      setError(
        error.response?.data?.message || "Registration failed"
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
            alt="Signup"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">

          <div className="w-75">
            <Card>
              <h3 className="text-center mb-4">Create Account</h3>

              <form onSubmit={handleSignup}>

                <Input
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

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
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {error && (
                  <p className="text-danger">{error}</p>
                )}

                <Button type="submit">
                  Sign Up
                </Button>

              </form>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Signup;