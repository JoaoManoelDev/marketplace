import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUserStore } from "../../../../shared/stores/user-store";
import { useRegisterMutation } from "../../hooks/use-register-mutation";
import { registerSchema, RegisterSchema } from "../../schemas/register-schema";

export function useRegisterViewModel() {
  const register = useRegisterMutation();

  const { setSession } = useUserStore()

  const { handleSubmit, control, formState: { errors } } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  })

  async function onSubmitRegister(data: RegisterSchema) {
    const { confirmPassword, ...userData } = data;

    const mutationResponse = await register.mutateAsync(userData);

    setSession({
      userData: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
  }

  const handleSubmitRegister = handleSubmit(onSubmitRegister);

  return {
    control,
    errors,
    handleSubmitRegister,
  }
}

export type UseRegisterViewModel = ReturnType<typeof useRegisterViewModel>;
