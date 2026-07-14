import { useState, type SubmitEvent } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

type RegisterFormProps = {};

export type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function RegisterForm({}: RegisterFormProps) {
  const [formData, setFormData] = useState<RegisterType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (value: string, field: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form className="bg" onSubmit={handleSubmit}>
      <Input
        placeholder={"First Name"}
        onChange={onChange}
        value={formData.firstName}
        field={"firstName"}
      />
      <Input
        placeholder={"Last Name"}
        onChange={onChange}
        value={formData.lastName}
        field={"lastName"}
      />
      <Input
        placeholder={"Email"}
        onChange={onChange}
        value={formData.email}
        field={"email"}
      />
      <Input
        placeholder={"Password"}
        onChange={onChange}
        value={formData.password}
        field={"password"}
      />
      <Button type={"submit"}>Register</Button>
    </form>
  );
}
