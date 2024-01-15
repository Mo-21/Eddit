import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Credentials, UserResponse } from "../services/authService";
import authService from "../services/authService";

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<UserResponse, Error, Credentials>({
    mutationFn: authService.logIn,
    onSuccess: (userResponse, credentials) => {
      queryClient.setQueryData<UserResponse>(["user"], userResponse);
    },
  });
};

export default useLogin;
