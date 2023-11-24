import { z } from "zod";

const userSchema = z.object({
  id: z.string().uuid(),
  fullName: z.string(),
  email: z.string().email(),
  admin: z.boolean().default(false),
  password: z.string(),
  phone: z.number(),
  createdAt: z.string().or(z.date()),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

const userReturnSchema = userSchema.omit({
  password: true,
});
const userReadSchema = userReturnSchema.array();

const userUpdateSchema = userCreateSchema.omit({ admin: true }).partial();

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  userReadSchema,
  userUpdateSchema,
};
