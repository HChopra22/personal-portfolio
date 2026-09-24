import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email address').max(200),
  message: z.string().trim().min(10, 'Please add a few more details').max(5000),
  // honeypot — real users never see or fill this
  company: z.string().max(200).optional(),
})
