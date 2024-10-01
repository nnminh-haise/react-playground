export interface Authenticate {
  email: string;

  password: string;
}

export function GetAuthenticateDefaultValue(): Authenticate {
  return {
    email: "",
    password: "",
  };
}
