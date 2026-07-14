import { useState } from "react";
import type { LoginFormData } from "../../schemas/auth/login.schema";

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  return <div></div>;
}
