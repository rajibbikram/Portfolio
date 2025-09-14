import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Setup transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // You receive emails in your Gmail
      subject: `📩 New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, msg: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, msg: "Failed to send email." }), {
      status: 500,
    });
  }
}
