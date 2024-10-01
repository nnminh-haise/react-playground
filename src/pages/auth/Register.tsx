import "../../assets/style/pages/auth/SharedAuthForm.css";
import {
  GetRegistrationDefaultValue,
  Registration,
} from "./types/Registration.interface";
import { FormBase } from "../../components/forms/FormBase";
import { Gender } from "./types/Gender.enum";

export const RegistrationForm: React.FC = () => {
  const formSubmitHandler = async (form: Registration) => {
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
      isRequired: true,
    },
    {
      id: "firstName",
      label: "First name",
      type: "text",
      placeholder: "First name",
      isRequired: true,
    },
    {
      id: "lastName",
      label: "Last name",
      type: "text",
      placeholder: "Last name",
      isRequired: true,
    },
    {
      id: "gender",
      enumType: Gender,
      label: "Gender",
      isRequired: true,
    },
    {
      id: "dateOfBirth",
      label: "Date of birth",
      type: "date",
      isRequired: true,
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Phone",
      isRequired: true,
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "Address",
    },
  ];

  return (
    <div className="registration-form">
      <FormBase<Registration>
        name="registration"
        title="Sign up"
        formInputs={formInputData}
        formInitializedObject={GetRegistrationDefaultValue()}
        onFormSubmit={formSubmitHandler}
        submitButtonText="Sign up"
        footerChildren={[
          <div className="form-redirect direct-to-login">
            Have an account? <a href="/login">Login</a>
          </div>,
        ]}
      />
    </div>
  );
};
