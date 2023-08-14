import { z } from 'zod';

const createsectorInvolvedZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required.',
    }),
    sector: z.string({
      required_error: 'Sector is required.',
    }),
    agree: z.boolean({
      required_error: 'Agree is required.',
    }),
  }),
});

export const sectorInvolvedValidation = {
  createsectorInvolvedZodSchema,
};
