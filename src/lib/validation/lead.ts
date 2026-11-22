import { z } from 'zod';

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid corporate or business email.' })
    .max(150),
  phone: z
    .string()
    .trim()
    .max(30, { message: 'Phone number cannot exceed 30 characters.' })
    .optional()
    .or(z.literal('')),
  companyName: z
    .string()
    .trim()
    .min(2, { message: 'Company name must be at least 2 characters.' })
    .max(150),
  country: z
    .string()
    .trim()
    .min(2, { message: 'Please specify your country.' })
    .max(100),
  jobTitle: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal('')),
  industry: z
    .string()
    .min(1, { message: 'Please select an industry vertical.' }),
  productInterest: z
    .string()
    .min(1, { message: 'Please select a solution or area of interest.' }),
  message: z
    .string()
    .trim()
    .max(3000, { message: 'Message cannot exceed 3000 characters.' })
    .optional()
    .or(z.literal('')),
  source: z.string().default('website'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the data processing terms.' }),
  }),
  // Anti-spam honeypot (should remain empty)
  websiteHp: z.string().max(0, { message: 'Spam detected' }).optional().or(z.literal('')),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;
