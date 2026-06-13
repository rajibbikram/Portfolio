import { Resend } from 'resend';

export const runtime = 'edge';

const OWNER_EMAIL = 'shahrajib278@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (payload?.name ?? '').trim();
  const email = (payload?.email ?? '').trim();
  const message = (payload?.message ?? '').trim();

  if (!name || !email || !message) {
    return Response.json({ error: 'Name, email and message are required.' }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Email service is not configured. Please set RESEND_API_KEY.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: [OWNER_EMAIL],
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return Response.json({ error: 'Failed to send message. Please try again later.' }, { status: 502 });
  }

  return Response.json({ success: true });
}
