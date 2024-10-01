import { ChangeEvent, useState } from "react";
import "../../assets/style/components/forms/FormInput.css";

type EnumType = Record<string, string>;

export interface FormEnumInputProps<T extends EnumType> {
  id: string;
  enumType: T;
  label: string;
  onChange: (value: T[keyof T]) => void;
  isRequired?: boolean;
}

export const FormEnumInput = <T extends EnumType>({
  id,
  enumType,
  label,
  onChange,
  isRequired,
}: FormEnumInputProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<T[keyof T] | string>("");

  const handleValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value as T[keyof T];
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {isRequired && <span className="required-field-indicator"> *</span>}
      </label>
      <select
        id={id}
        name={id}
        value={selectedValue}
        onChange={handleValueChange}
        style={{
          padding: "5px",
        }}
      >
        <option value="" selected disabled>
          Select {label}
        </option>
        {Object.values(enumType).map((value) => (
          <option key={value} value={value}>
            {value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
