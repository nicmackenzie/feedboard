function Button({ children, type, isLoading, disabled }) {
  return (
    <button type={type} disabled={disabled || isLoading} className="btn">
      {children}
    </button>
  );
}

export default Button;
