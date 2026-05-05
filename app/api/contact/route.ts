import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload?.name || !payload?.email || !payload?.message) {
    return NextResponse.json(
      { ok: false, error: "name, email, message are required" },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      status: "accepted",
      note: "Contact backend is scaffolded. Wire this route to email, CRM, or database later.",
    },
    { status: 202 },
  );
}
