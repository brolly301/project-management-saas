import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import type { RegisterFormData } from "../../schemas/auth/register.schema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <form className="bg" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        autoComplete="given-name"
        placeholder={"First Name"}
        {...register("firstName")}
      />
      <Input
        type="text"
        autoComplete="family-name"
        placeholder={"Last Name"}
        {...register("lastName")}
      />
      <Input
        type="email"
        autoComplete="email"
        placeholder={"Email"}
        {...register("email")}
      />
      <Input
        type="password"
        autoComplete="new-password"
        placeholder={"Password"}
        {...register("password")}
      />
      <Button type={"submit"} disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Register"}
      </Button>
    </form>
  );
}
