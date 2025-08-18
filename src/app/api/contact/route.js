export const runtime = 'edge'; // Required by Cloudflare

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // create transporter (⚠️ Nodemailer won't run on Edge runtime)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true, message: "Message sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Message failed to send." }), {
      status: 500,
    });
  }
}
