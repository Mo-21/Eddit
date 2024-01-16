import APIClient from "./APIClient";

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  createdAt: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface RegistrationData {
  username: string;
  email: string;
  avatar?: string | null;
  password: string;
}

export const login = new APIClient<Credentials, UserResponse>("/auth/login")
  .logIn;
export const register = new APIClient<RegistrationData, UserResponse>(
  "/auth/register"
).register;
