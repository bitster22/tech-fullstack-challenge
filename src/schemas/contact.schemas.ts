import { z } from "zod";

const contactSchema = z.object({
  id: z.string().uuid(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.number(),
  createdAt: z.string().or(z.date()),
});

const contactCreateSchema = contactSchema.omit({
  id: true,
});

const contactReadSchema = contactSchema.array();

const contactUpdateSchema = contactCreateSchema.partial();

export {
  contactSchema,
  contactCreateSchema,
  contactReadSchema,
  contactUpdateSchema,
};
