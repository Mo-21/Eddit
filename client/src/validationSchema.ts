import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid Email")
    .max(255, "Email can be max 255 char")
    .min(10, "Email can be min 255 char"),

  password: z
    .string()
    .min(1, "Password is Required")
    .min(8, "Password must be at least 8 characters long")
    .refine((value) => /\d/.test(value), {
      message: "Password must contain at least one number",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((value) => /[^a-zA-Z\d]/.test(value), {
      message: "Password must contain at least one special character",
    }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
