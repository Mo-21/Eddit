import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<UserResponse, Error, Credentials>({
    mutationFn: (data: Credentials) =>
      axios.post<UserResponse>("/api/auth/login", data).then((res) => res.data),
    onSuccess: (userResponse, credentials) => {
      queryClient.setQueryData<UserResponse>(["user"], userResponse);
    },
  });
};

interface UserResponse {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  createdAt: string;
}

interface Credentials {
  email: string;
  password: string;
}

export default useLogin;
