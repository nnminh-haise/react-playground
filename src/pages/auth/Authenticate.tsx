import React, { ChangeEvent, useState } from "react";
import "../../assets/style/components/forms/FormBase.css";
import { FormInputProps } from "../../components/forms/types/FormInputProps.interface";
import { FormInput } from "../../components/forms/FormInput";
import {
  Authenticate,
  GetAuthenticateDefaultValue,
} from "./types/Authenticate.interface";

export const AuthenticationForm: React.FC = () => {
  const [form, setForm] = useState<Authenticate>(GetAuthenticateDefaultValue());
  const [fieldError, setFieldError] = useState<{ [key: string]: string }>({});
  const [formError, setFormError] = useState("");

  const formUpdateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setFieldError({ ...fieldError, [event.target.name]: "" });
    setFormError("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const formInputs: FormInputProps[] = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "example@domain.com",
      onChange: formUpdateHandler,
      isRequired: true,
      errorMessage: fieldError["email"],
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      onChange: formUpdateHandler,
      errorMessage: fieldError["password"],
    },
  ];

  return (
    <div className="form-component">
      <form className="form-container" onSubmit={formSubmitHandler}>
        <div className="form-header">
          <h2>Login</h2>
        </div>
        <div className="form-body">
          {formInputs.map((formInput) => {
            return (
              <FormInput
                key={formInput.id}
                id={formInput.id}
                label={formInput.label}
                type={formInput.type}
                placeholder={formInput.placeholder}
                onChange={formInput.onChange}
                isRequired={formInput.isRequired}
                errorMessage={formInput.errorMessage}
              />
            );
          })}
        </div>
        <div className="form-footer">
          <button type="submit">Login</button>
          {formError && <p className="form-error"></p>}
        </div>
      </form>
    </div>
  );
};
