import nodemailer from "nodemailer";

export async function POST(req) {
  try {
     console.log("✅ POST /api/contact hit");
    const { name, email, phone, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, message: "Missing fields" }), {
        status: 400,
      });
    }

    // Create transporter using GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., "smtpout.secureserver.net"
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // full email like contact@yourdomain.com
        pass: process.env.SMTP_PASS,
      },
    });
    const mailOptions = {
      from: process.env.SMTP_USER,
      to:   process.env.SMTP_RECEIVER, // your destination email, e.g., your Gmail or same domain
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to send email",
      error: error.message,
    }), {
      status: 500,
    });
  }
}