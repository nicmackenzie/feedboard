function FormControl({ id, type, onChange, value, name, label, placeholder }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-clr-purple focus:border-clr-purple block w-full p-2.5"
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormControl;
