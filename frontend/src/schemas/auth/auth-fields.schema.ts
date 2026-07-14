import * as z from "zod/v4";

export const firstNameSchema = z
  .string()
  .min(1, "First name is required.")
  .max(100, "First name must not exceed 100 characters.");

export const lastNameSchema = z
  .string()
  .min(1, "Last name is required.")
  .max(100, "Last name must not exceed 100 characters.");

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, "Email is required.")
  .pipe(z.email("Please enter a valid email address"));

export const passwordSchema = z
  .string()
  .min(1, "Password is required.")
  .min(8, "Password must be at least 8 characters.")
  .refine(
    (val) => /[A-Z]/.test(val),
    "Password must include an uppercase character.",
  )
  .refine(
    (val) => /[a-z]/.test(val),
    "Password must include a lowercase character.",
  )
  .refine((val) => /\d/.test(val), "Password must include a number.")
  .refine(
    (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
    "Password must include a special character.",
  );
