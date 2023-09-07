function FormControl({
  id,
  onChange,
  onBlur,
  value,
  name,
  label,
  error,
  options = [],
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={name}
        className={`bg-gray-50 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-clr-purple focus:border-clr-purple block w-full p-2.5`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        <option value="">Select Option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}

export default FormControl;
