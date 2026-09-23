import { useEffect } from "react";
import confetti from "canvas-confetti";

const OrderSuccess = ({ show, onClose, onViewOrders }) => {
  useEffect(() => {
    if (!show) return;

    const duration = 2500;
    const end = Date.now() + duration;

    let animationFrame;

    const animation = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 60,
        origin: {
          x: 0,
          y: 0.7,
        },
      });

      confetti({
        particleCount: 8,
        angle: 120,
        spread: 60,
        origin: {
          x: 1,
          y: 0.7,
        },
      });

      if (Date.now() < end) {
        animationFrame = requestAnimationFrame(animation);
      }
    };

    animation();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 2000 }}
      ></div>

      {/* Success Popup */}
      <div
        className="position-fixed top-50 start-50 translate-middle bg-white rounded-4 shadow-lg text-center p-4 p-md-5"
        style={{
          zIndex: 2001,
          width: "min(90%, 420px)",
        }}
      >
        {/* Success Icon */}
        <div
          className="mx-auto mb-3 rounded-circle bg-success-subtle d-flex align-items-center justify-content-center"
          style={{
            width: "80px",
            height: "80px",
          }}
        >
          <i className="bi bi-check-circle-fill text-success fs-1"></i>
        </div>

        {/* Heading */}
        <h3 className="fw-bold mb-2">
          Order Successfully! 🎉
        </h3>

        {/* Message */}
        <p className="text-muted mb-4">
          Your order has been placed successfully.
          <br />
          Thank you for shopping with us!
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">

          <button
            type="button"
            className="btn btn-success rounded-pill px-4"
            onClick={onViewOrders}
          >
            <i className="bi bi-bag-check me-2"></i>
            View My Orders
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill px-4"
            onClick={onClose}
          >
            Continue Shopping
          </button>

        </div>
      </div>
    </>
  );
};

export default OrderSuccess;