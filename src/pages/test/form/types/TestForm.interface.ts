import { Gender } from "./Gender.enum";

export interface TestFormProps {
  firstName: string;

  lastName: string;

  email: string;

  password: string;

  age: number;

  dateOfBirth: Date;

  gender: Gender;
}

export function GetTestFormPropsDefaultValue(): TestFormProps {
  return {
    firstName: "",
    lastName: "",
    email: "example@gmail.com",
    password: "12345678",
    age: 10,
    dateOfBirth: new Date(),
    gender: Gender.MALE,
  };
}
