import { NextRequest, NextResponse } from "next/server"
import { processDeal } from "@/lib/deals"

export async function POST(request: NextRequest) {
  const token = process.env.DEALS_API_TOKEN
  if (!token) {
    return NextResponse.json(
      { error: "Server misconfigured: DEALS_API_TOKEN not set" },
      { status: 500 },
    )
  }

  const auth = request.headers.get("authorization")
  if (!auth || auth !== `Bearer ${token}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    )
  }

  const result = await processDeal(body)

  if (!result.success) {
    return NextResponse.json(result, { status: 422 })
  }

  return NextResponse.json(result, { status: 201 })
}
