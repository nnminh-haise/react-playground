import { ChangeEvent } from "react";

export interface FormInputProps {
  key?: string;
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
}
