import React, { ChangeEvent, useState } from "react";
import { AuthenticateRequestDto } from "../dtos/AuthenticateRequest.dto";
import { AuthenticateRequest } from "../services/AuthenticateService";
import { AuthenticatedResponseDto } from "../dtos/AuthenticatedResponse.dto";

import "../../../assets/style/authenticate/AuthenticateForm.css";
import FormInput from "../../../components/forms/FormInput";
import { AuthenticateFormErrorDto } from "../dtos/AuthenticateFormError.dto";
import { AuthenticateRequestErrorDto } from "../dtos/AuthenticateRequestError.dto";

const AuthenticateForm: React.FC = () => {
  const [authenticateRequestError, setAuthenticateRequestError] = useState("");
  const [fieldError, setFieldError] = useState<{ [key: string]: string }>({});
  const [authenticateForm, setAuthenticateForm] =
    useState<AuthenticateRequestDto>({
      email: "",
      password: "",
    });

  const updateAuthenticateForm = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthenticateForm({
      ...authenticateForm,
      [event.target.name]: event.target.value,
    });
    setFieldError({ ...fieldError, [event.target.name]: "" });
    setAuthenticateRequestError("");
  };

  const sendAuthenticateRequest = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const response:
      | AuthenticatedResponseDto
      | AuthenticateFormErrorDto
      | AuthenticateRequestErrorDto = await AuthenticateRequest(
      authenticateForm
    );
    if ("fieldId" in response) {
      setFieldError({ [response.fieldId]: response.message });
    } else if ("token" in response) {
      console.log("response:", response);
    } else {
      setAuthenticateRequestError(response.message);
    }
  };

  return (
    <div className="form-container authenticate-form">
      <div className="form-header">
        <h2>Login</h2>
      </div>
      <form
        className="form-body authenticate-form"
        onSubmit={sendAuthenticateRequest}
      >
        <div className="form-fields-container">
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Enter email"
            onChange={updateAuthenticateForm}
            isRequired={true}
            errorMessage={fieldError.email}
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            onChange={updateAuthenticateForm}
            isRequired={true}
            errorMessage={fieldError.password}
          />
        </div>
        <div className="form-submit">
          <button className="submit-button" type="submit">
            Login
          </button>
          {authenticateRequestError && (
            <p className="authenticate-request-error">
              {authenticateRequestError}
            </p>
          )}
        </div>
      </form>
      <div className="form-footer">
        Don't have an account? <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default AuthenticateForm;
