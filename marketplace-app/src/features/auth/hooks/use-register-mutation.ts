import { useMutation } from "@tanstack/react-query";

import { registerService } from "../services/register-service";
import { IRegisterRequest } from "../interfaces/register";

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (userData: IRegisterRequest) => registerService(userData),
    onSuccess: (response) => {
      console.log("USER", response);
    },
    onError: (error) => {
      console.log(error);
    },
  })
}
