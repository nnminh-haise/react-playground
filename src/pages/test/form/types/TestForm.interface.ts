export interface TestFormProps {
  email: string;

  password: string;
}

export function GetTestFormPropsDefaultValue(): TestFormProps {
  return {
    email: "example@gmail.com",
    password: "12345678",
  };
}
