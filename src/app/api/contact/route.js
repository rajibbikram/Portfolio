import { Resend } from "resend";

export const runtime = "edge"; // Required for Cloudflare Pages Edge API

// Use ENV variable for API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Send email via Resend
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // verified sender in Resend
      to: process.env.EMAIL_USER, // your email to receive messages
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
