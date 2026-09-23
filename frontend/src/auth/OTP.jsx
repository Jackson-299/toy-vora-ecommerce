import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Card from "../ui/Card";

const OTP = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
  const value = e.target.value;

  if (!/^\d$/.test(value)) {
    return;
  }

  const newOtp = [...otp];
  newOtp[index] = value;

  setOtp(newOtp);

  if (index < 5) {
    document
      .getElementById(`otp-${index + 1}`)
      .focus();
  }
};

const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
    e.preventDefault();

    const newOtp = [...otp];

    // Current box has number
    if (otp[index] !== "") {
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    // Current box is empty
    if (index > 0) {
      newOtp[index - 1] = "";
      setOtp(newOtp);

      document
        .getElementById(`otp-${index - 1}`)
        .focus();
    }
  }
};

  const handleVerify = () => {
    const enteredOTP = otp.join("");

    if (enteredOTP.length === 6) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100">

        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200"
            alt="OTP"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-75">

            <Card>
              <h3 className="text-center mb-2">
                Verify OTP
              </h3>

              <p className="text-center text-muted mb-4">
                Enter the 6 digit OTP
              </p>

              <div className="d-flex gap-2 justify-content-center mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="form-control text-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      fontSize: "20px",
                    }}
                  />
                ))}
              </div>

              <Button type="button" onClick={handleVerify}>
                Verify OTP
              </Button>

            </Card>

          </div>
        </div>

      </div>
    </div>
  );
};

export default OTP;