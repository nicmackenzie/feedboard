function Button({ children, type, isLoading }) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="rounded-md bg-clr-purple px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-clr-purple hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {children}
    </button>
  );
}

export default Button;
