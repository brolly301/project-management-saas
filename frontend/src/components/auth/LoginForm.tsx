import { useForm } from "react-hook-form";
import {
  loginSchema,
  type LoginFormData,
} from "../../schemas/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { loginUser } from "../../services/auth.service";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    await loginUser(data);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Email"
        type="email"
        error={errors.email?.message}
        autoComplete="email"
        {...register("email")}
      />
      <Input
        placeholder="Password"
        type="password"
        error={errors.password?.message}
        autoComplete="current-password"
        {...register("password")}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
