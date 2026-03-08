import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(4, { message: "Nome deve ter no mínimo 4 caracteres" }),

    email: z.email({ message: "Email inválido" }),

    password: z
      .string()
      .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),

    confirmPassword: z
      .string()
      .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),

    phone: z.string().regex(/^\d{11}$/, {
      message: "Telefone deve conter 11 números (DDD + número)",
    }),

    avatarUrl: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;