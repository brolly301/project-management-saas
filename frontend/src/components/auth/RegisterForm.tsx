import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  type RegisterFormData,
} from "../../schemas/auth/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../services/auth.service";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    await registerUser(data);
  };

  return (
    <form className="bg" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        autoComplete="given-name"
        placeholder={"First Name"}
        error={errors.firstName?.message}
        {...register("firstName")}
      />
      <Input
        type="text"
        autoComplete="family-name"
        placeholder={"Last Name"}
        error={errors.lastName?.message}
        {...register("lastName")}
      />
      <Input
        type="email"
        autoComplete="email"
        placeholder={"Email"}
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        autoComplete="new-password"
        placeholder={"Password"}
        error={errors.password?.message}
        {...register("password")}
      />
      <Button type={"submit"} disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Register"}
      </Button>
    </form>
  );
}
