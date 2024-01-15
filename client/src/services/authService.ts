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

export default new APIClient<Credentials, UserResponse>("/api/auth/login");
