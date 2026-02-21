/**
 * Cloudflare Turnstile - verificación server-side del token.
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

export type TurnstileVerifyResult =
  | { success: true }
  | { success: false; error: string }

export async function verifyTurnstileToken(
  token: string | null
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    return { success: false, error: "Turnstile no configurado en el servidor" }
  }

  if (!token || typeof token !== "string" || token.length === 0) {
    return { success: false, error: "Falta la verificación de seguridad. Intenta de nuevo." }
  }

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
      }),
    })

    const data = (await res.json()) as {
      success?: boolean
      "error-codes"?: string[]
    }

    if (data.success === true) {
      return { success: true }
    }

    const codes = data["error-codes"] ?? []
    if (codes.includes("timeout-or-duplicate")) {
      return { success: false, error: "La verificación expiró. Recarga la página e intenta de nuevo." }
    }
    return { success: false, error: "Verificación de seguridad fallida. Intenta de nuevo." }
  } catch {
    return { success: false, error: "Error al verificar. Intenta de nuevo." }
  }
}

/** Si está configurado el secret, Turnstile es obligatorio. */
export function isTurnstileRequired(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY)
}
