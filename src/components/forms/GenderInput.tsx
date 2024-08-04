interface GenderInputProps {
  id: string;
  label: string;
  options: Map<string, string>;
}

const GenderInput: React.FC<GenderInputProps> = (payload: GenderInputProps) => {
  return (
    <div className="form-input">
      <label htmlFor="gender">
        {payload.label} <span className="required-field-indicator">*</span>
      </label>
      <select id={payload.id} name={payload.id} required>
        <option value="" disabled selected>
          Select your gender
        </option>
        {[...payload.options.entries()].map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenderInput;
