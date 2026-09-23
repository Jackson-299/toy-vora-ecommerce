
const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      className="btn btn-primary w-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;