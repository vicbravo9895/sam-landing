"use server"

import { processDeal, type DealResult } from "@/lib/deals"
import { isTurnstileRequired, verifyTurnstileToken } from "@/lib/turnstile"

export async function submitDeal(formData: FormData): Promise<DealResult> {
  if (isTurnstileRequired()) {
    const token = formData.get("cf-turnstile-response") as string | null
    const verification = await verifyTurnstileToken(token)
    if (!verification.success) {
      return { success: false, error: verification.error }
    }
  }

  const data = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company_name: formData.get("company_name") as string,
    position: (formData.get("position") as string) ?? "",
    fleet_size: formData.get("fleet_size") as string,
    country: formData.get("country") as string,
    challenges: (formData.get("challenges") as string) ?? "",
  }

  return processDeal(data)
}
