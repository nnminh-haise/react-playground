import React from "react";
import "../../assets/style/pages/auth/SharedAuthForm.css";
import {
  Authentication,
  GetAuthenticationDefaultValue,
} from "./types/Authenticate.interface";
import { FormBase } from "../../components/forms/FormBase";

export const AuthenticationForm: React.FC = () => {
  const formSubmitHandler = (form: Authentication) => {
    console.log("Submitted form:", form);
  };

  const formInputData: any[] = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "example@domain.com",
      isRequired: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="registration-form">
      <FormBase<Authentication>
        name="registration"
        title="Login"
        formInputs={formInputData}
        formInitializedObject={GetAuthenticationDefaultValue()}
        onFormSubmit={formSubmitHandler}
        submitButtonText="Login"
        footerChildren={[
          <div className="form-redirect direct-to-login">
            Have an account? <a href="/register">Sign up</a>
          </div>,
        ]}
      />
    </div>
  );
};
