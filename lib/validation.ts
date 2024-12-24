import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(3, "El nombre del usuario debe tener al menos 3 caracteres.")
    .max(
      150,
      "Ha alcanzado el máximo de caracteres para el Nombre del Usuario"
    ),
  email: z.string().email("Formato de correo electrónico incorrecto"),
  phone: z
    .string()
    .refine(
      (phone) => /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(phone),
      "Formato de teléfono inválido"
    ),
});
