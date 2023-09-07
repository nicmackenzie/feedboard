function Button({ children, type, isLoading, disabled, onClick }) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className="btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
