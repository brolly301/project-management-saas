import * as z from "zod/v4";
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from "./auth-fields.schema";

export const registerSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export type RegisterFormData = z.infer<typeof registerSchema>;
