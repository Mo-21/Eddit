import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Credentials, UserResponse } from "../services/authService";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation<UserResponse, Error, Credentials>({
    mutationFn: authService.logIn,
    onSuccess: (userResponse, credentials) => {
      queryClient.setQueryData<UserResponse>(["user"], userResponse);
      navigate("/");
    },
  });
};
