import { Gender } from "./Gender.enum";
import { Role } from "./Role.enum";

export interface Registration {
  firstName: string;

  lastName: string;

  email: string;

  password: string;

  age: number;

  dateOfBirth: Date;

  gender: Gender;

  role: Role;
}

export function GetRegistrationDefaultValue(): Registration {
  return {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
    dateOfBirth: new Date(),
    gender: Gender.MALE,
    role: Role.USER,
  };
}
