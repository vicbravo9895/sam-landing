import { z } from "zod"

export const dealSchema = z.object({
  first_name: z.string().min(1, "first_name is required"),
  last_name: z.string().min(1, "last_name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "phone is required"),
  company_name: z.string().min(1, "company_name is required"),
  position: z.string().optional().default(""),
  fleet_size: z.string().min(1, "fleet_size is required"),
  country: z.string().min(1, "country is required"),
  challenges: z.string().optional().default(""),
})

export type DealInput = z.infer<typeof dealSchema>

export type DealResult =
  | { success: true; message: string }
  | { success: false; error: string; details?: z.ZodIssue[] }

export async function processDeal(data: unknown): Promise<DealResult> {
  const parsed = dealSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed",
      details: parsed.error.issues,
    }
  }

  // TODO: persist the deal — database, CRM, email notification, etc.
  // For now we just log it so you can wire your own backend later.
  console.log("[Deal received]", JSON.stringify(parsed.data, null, 2))

  return { success: true, message: "Deal created successfully" }
}
