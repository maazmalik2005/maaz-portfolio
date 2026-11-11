import { NextResponse } from "next/server";

const recipient = "maaz47372@gmail.com";
const maxLengths = {
  name: 100,
  email: 254,
  subject: 160,
  message: 5000,
} as const;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: string) {
  return value.trim().replace(/\u0000/g, "");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (isNonEmptyString(payload.website)) {
    return NextResponse.json({ message: "Thanks for your message." });
  }

  const fields = {
    name: isNonEmptyString(payload.name) ? clean(payload.name) : "",
    email: isNonEmptyString(payload.email) ? clean(payload.email).toLowerCase() : "",
    subject: isNonEmptyString(payload.subject) ? clean(payload.subject) : "",
    message: isNonEmptyString(payload.message) ? clean(payload.message) : "",
  };

  const errors: Record<string, string> = {};

  for (const [field, value] of Object.entries(fields)) {
    if (!value) {
      errors[field] = "This field is required.";
    } else if (value.length > maxLengths[field as keyof typeof maxLengths]) {
      errors[field] = "This field is too long.";
    }
  }

  if (fields.email && !isValidEmail(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (fields.message && fields.message.length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Check the highlighted fields.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Contact email delivery is not configured.");
    return NextResponse.json(
      { message: "Email delivery is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: fields.email,
      subject: `Portfolio enquiry: ${fields.subject}`,
      text: [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Subject: ${fields.subject}`,
        "",
        fields.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Resend email delivery failed.", {
      status: response.status,
      body: errorBody.slice(0, 500),
    });
    return NextResponse.json(
      { message: "Something went wrong while sending your message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks, your message has been sent." });
}
