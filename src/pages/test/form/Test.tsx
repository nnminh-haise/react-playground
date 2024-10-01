import React from "react";
import "../../../assets/style/components/forms/FormBase.css";
import {
  GetTestFormPropsDefaultValue,
  TestFormProps,
} from "./types/TestForm.interface";
import { FormInputProp } from "../../../components/forms/types/FormInputProp.interface";
import { FormBase } from "../../../components/forms/FormBase";

export const Test: React.FC = () => {
  const formSubmitHandler = (form: TestFormProps) => {
    console.log("submitted form:", form);
  };

  const formInputs: FormInputProp[] = [
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
  ];

  return (
    <div className="test-form">
      <FormBase<TestFormProps>
        name="test"
        header="Test form"
        formInputs={formInputs}
        formFieldProp={GetTestFormPropsDefaultValue()}
        onFormSubmit={formSubmitHandler}
      />
    </div>
  );
};
