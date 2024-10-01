import { FormInputProp } from "./FormInputProp.interface";

export interface FormBaseProp<FORM_PROP> {
  name: string;

  header: string;

  formInputs?: FormInputProp[];

  formEnumInputs?: any;

  formFieldProp: FORM_PROP;

  onFormSubmit: (formValues: FORM_PROP) => void;
}
