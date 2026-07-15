import api from "../lib/axios";
import type { LoginFormData } from "../schemas/auth/login.schema";
import type { RegisterFormData } from "../schemas/auth/register.schema";

export const registerUser = async (data: RegisterFormData) => {
  const res = await api.post("/auth/register", {
    email: data.email,
    password: data.password,
    first_name: data.firstName,
    last_name: data.lastName,
  });

  return res.data;
};

export const loginUser = async (data: LoginFormData) => {
  const res = await api.post("/auth/login", data);

  return res.data;
};
