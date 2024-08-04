import axios from "axios";
import { AuthenticatedResponseDto } from "../dtos/AuthenticatedResponse.dto";
import { AuthenticateRequestDto } from "../dtos/AuthenticateRequest.dto";
import { EmailValidation } from "./EmailValidationService";
import { PasswordValidation } from "./PasswordValidationService";
import { AuthenticateFormErrorDto } from "../dtos/AuthenticateFormError.dto";
import { AuthenticateRequestErrorDto } from "../dtos/AuthenticateRequestError.dto";

const env: ImportMetaEnv = import.meta.env;
const AUTH_URL = `${env.VITE_HOST_URL}/${env.VITE_API_PREFIX}/${env.VITE_API_VERSION}/${env.VITE_AUTH_MODULE_NAME}/authenticate`;

const ValidateAuthenticateRequest = (
  payload: AuthenticateRequestDto
): true | AuthenticateFormErrorDto => {
  const isValidEmail = EmailValidation(payload.email);
  if (!isValidEmail) {
    return {
      fieldId: "email",
      message: "Invalid email",
    };
  }
  const isValidPassword = PasswordValidation(payload.password);
  if (!isValidPassword) {
    return {
      fieldId: "password",
      message: "Invalid Password",
    };
  }
  return true;
};

export const AuthenticateRequest = async (
  payload: AuthenticateRequestDto
): Promise<
  | AuthenticatedResponseDto
  | AuthenticateFormErrorDto
  | AuthenticateRequestErrorDto
> => {
  const payloadValidation = ValidateAuthenticateRequest(payload);
  if (payloadValidation !== true) {
    return payloadValidation;
  }

  try {
    const response = await axios.post(AUTH_URL, payload);
    if (response.status === 200 && "data" in response.data) {
      return {
        token: response.data.data.token,
      };
    }
  } catch (error) {
    return { message: "Invalid email or password" };
  }

  return { message: "Unknown server error" };
};
