import * as z from "zod/v4";
import { emailSchema, passwordSchema } from "./auth-fields.schema";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginFormData = z.infer<typeof loginSchema>;
