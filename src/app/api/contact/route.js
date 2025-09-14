import { Resend } from "resend";

export const runtime = "edge"; // Required for Cloudflare Pages Edge API

// Check for missing environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_USER = process.env.EMAIL_USER;

if (!RESEND_API_KEY) {
  console.warn("Warning: RESEND_API_KEY is missing!");
}

if (!EMAIL_USER) {
  console.warn("Warning: EMAIL_USER is missing!");
}

// Only create Resend instance if API key exists
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req) {
  if (!RESEND_API_KEY || !EMAIL_USER) {
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Missing environment variables. Please set RESEND_API_KEY and EMAIL_USER."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // must be verified in Resend
      to: EMAIL_USER,
      subject: `📩 New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(
      JSON.stringify({ success: true, msg: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, msg: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
