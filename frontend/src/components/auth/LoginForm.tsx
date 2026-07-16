import { useForm } from "react-hook-form";
import {
  loginSchema,
  type LoginFormData,
} from "../../schemas/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { loginUser } from "../../services/auth.service";
import { Link, useNavigate } from "react-router";
import SocialButton from "./SocialButton";
import AuthHeader from "./AuthHeader";
import Divider from "./Divider";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
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
    try {
      await loginUser(data);
      navigate("/dashboard");
    } catch {
      setError("root", {
        message: "Invalid email or password.",
      });
    }
  };

  return (
    <section className="w-full max-w-md">
      <AuthHeader
        title="Welcome back"
        subtitle="Log into your account to continue"
      />

      <div className="space-y-3">
        <SocialButton provider="google">Continue with Google</SocialButton>

        <SocialButton provider="github">Continue with GitHub</SocialButton>
      </div>

      <Divider />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email address
          </label>

          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            error={errors.email?.message}
            autoComplete="email"
            {...register("email")}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Forgot password?
            </Link>
          </div>

          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            error={errors.password?.message}
            autoComplete="current-password"
            {...register("password")}
          />
        </div>

        {errors.root?.message && (
          <p
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {errors.root.message}
          </p>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-slate-900 transition hover:text-slate-600"
        >
          Sign up
        </Link>
      </p>
    </section>
  );
}
