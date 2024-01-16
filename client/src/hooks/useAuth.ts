import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Credentials, UserResponse, RegistrationData } from "../services/authService";
import { login, register } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation<UserResponse, Error, Credentials>({
    mutationFn: login,
    onSuccess: (userResponse, credentials) => {
      queryClient.setQueryData<UserResponse>(["user"], userResponse);
      navigate("/");
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation<UserResponse, Error, RegistrationData>({
    mutationFn: register,
    onSuccess: (userResponse, credentials) => {
      queryClient.setQueryData<UserResponse>(["user"], userResponse);
      navigate("/");
    },
  });
};
