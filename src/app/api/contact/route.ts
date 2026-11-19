import { NextResponse } from "next/server";
import {
  type ContactPayload,
  validateContactPayload,
} from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot — pretend success without delivering
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { ok, errors } = validateContactPayload(body);
  if (!ok) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  const webhookSecret = process.env.CONTACT_FORM_SECRET;

  if (!endpoint) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        error:
          "Estimate form delivery is not configured yet. Please call (763) 291-7806 or email info@bath-renew.com.",
      },
      { status: 503 },
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookSecret ? { Authorization: `Bearer ${webhookSecret}` } : {}),
      },
      body: JSON.stringify({
        source: "bath-renew-website",
        submittedAt: new Date().toISOString(),
        fullName: body.fullName.trim(),
        email: body.email.trim(),
        phone: body.phone.trim(),
        projectDescription: body.projectDescription.trim(),
        projectType: body.projectType?.trim() || null,
        zipCode: body.zipCode?.trim() || null,
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not deliver your request right now. Please call or email Bath Renew directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not deliver your request right now. Please call or email Bath Renew directly.",
      },
      { status: 502 },
    );
  }
}
