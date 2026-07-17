import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  type RegisterFormData,
} from "../../schemas/auth/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../services/auth.service";
import { Link, useNavigate } from "react-router";
import AuthHeader from "./AuthHeader";
import SocialButton from "./SocialButton";
import Divider from "./Divider";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
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

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);
      navigate("/dashboard");
    } catch {
      setError("root", {
        message: "Unable to create your account. Please try again.",
      });
    }
  };

  return (
    <section className="w-full max-w-md">
      <AuthHeader
        title="Create your account"
        subtitle="Get started with Solia for free"
      />
      <div className="space-y-3">
        <SocialButton provider="google">Continue with Google</SocialButton>

        <SocialButton provider="github">Continue with GitHub</SocialButton>
      </div>
      <Divider />
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-slate-700"
          >
            First name
          </label>
          <Input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder={"First name"}
            error={errors.firstName?.message}
            {...register("firstName")}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-slate-700"
          >
            Last name
          </label>
          <Input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder={"Last name"}
            error={errors.lastName?.message}
            {...register("lastName")}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={"Email"}
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder={"Password"}
            error={errors.password?.message}
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
        <Button type={"submit"} disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create Account"}
        </Button>
      </form>
      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-slate-900 transition hover:text-slate-600"
        >
          Log in
        </Link>
      </p>
    </section>
  );
}
