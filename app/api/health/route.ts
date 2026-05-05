import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "with-sense-homepage",
    status: "ready",
  });
}
