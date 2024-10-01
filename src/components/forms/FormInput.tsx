import { FormInputProps } from "./types/FormInputProps.interface";
import "../../assets/style/components/forms/FormInput.css";

export const FormInput: React.FC<FormInputProps> = (props: FormInputProps) => {
  return (
    <div className="form-field">
      <label htmlFor={props.id}>
        {props.label}
        {props.isRequired && (
          <span className="required-field-indicator"> *</span>
        )}
      </label>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.errorMessage && (
        <p className="error-message">{props.errorMessage}</p>
      )}
    </div>
  );
};
