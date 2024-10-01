import { ChangeEvent, useState } from "react";
import { FormInput } from "./FormInput";
import { FormEnumInput } from "./FormEnumInput";
import { FormBaseProp } from "./types/FormBaseProp.interface";

export const FormBase = <FORM_PROP,>({
  name,
  header,
  formInputs,
  formEnumInputs,
  formFieldProp,
  onFormSubmit,
}: FormBaseProp<FORM_PROP>) => {
  const [form, setForm] = useState<FORM_PROP>(formFieldProp);
  const [fieldError, setFieldError] = useState<{ [key: string]: string }>({});
  const [formError, setFormError] = useState("");

  const formUpdateHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setFieldError({ ...fieldError, [event.target.name]: "" });
    setFormError("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(form);
  };

  return (
    <div className={`form-component ${name}-form`}>
      <form className="form-container" onSubmit={formSubmitHandler}>
        <div className="form-header">
          <h2>{header}</h2>
        </div>
        <div className="form-body">
          {formInputs?.map((input: any) => (
            <FormInput
              key={input.id}
              id={input.id}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              onChange={formUpdateHandler}
              isRequired={input.isRequired}
              errorMessage={fieldError[input.id]}
            />
          ))}

          {formEnumInputs?.map((input: any) => (
            <FormEnumInput
              key={input.id}
              id={input.id}
              enumType={input.enumType}
              label={input.label}
              onChange={(value) => {
                setForm({ ...form, [input.id]: value });
              }}
            />
          ))}
        </div>
        <div className="form-footer">
          <button type="submit">Submit</button>
          {formError && <p className="form-error">{formError}</p>}
        </div>
      </form>
    </div>
  );
};
