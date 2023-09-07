function Button({ children, type, isLoading, disabled, onClick, isDelete }) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${!isDelete ? 'btn' : 'btn-danger'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
