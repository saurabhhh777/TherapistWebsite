import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        console.log("From backend");
        console.log(email);

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Configure your transporter (use your Gmail or SMTP credentials)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail App Password (not your Gmail login)
            },
        });

        // Email content
        const mailOptions = {
            from: `"Dr. Serena Blake, PsyD" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Subscription Confirmation - Dr. Serena Blake",
            html: `
    <div style="font-family: 'Segoe UI', sans-serif; padding: 24px; background-color: #f9fafb; color: #111827;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0f766e; padding: 20px; color: white; text-align: center;">
          <h2 style="margin: 0;">Dr. Serena Blake, PsyD</h2>
          <p style="margin: 4px 0 0;"><a href="https://therapistapp.vercel.app" style="color: #d1fae5; text-decoration: underline;">therapistapp.vercel.app</a></p>
        </div>
        <div style="padding: 24px;">
          <h3 style="margin-top: 0;">Welcome & Thank You for Subscribing!</h3>
          <p>
            Dear Subscriber,
          </p>
          <p>
            Thank you for signing up to receive updates from Dr. Serena Blake, PsyD. Your interest in mental wellness is deeply valued, and I’m honored to be part of your journey toward emotional health and balance.
          </p>
          <p>
            You can expect thoughtful insights, tools, and announcements that support personal growth and therapeutic well-being.
          </p>
          <p>
            If you have any questions or would like to schedule a consultation, feel free to reply to this email or visit our website.
          </p>
          <p>
            Warm regards,<br/>
            <strong>Dr. Serena Blake, PsyD</strong><br/>
            Licensed Clinical Psychologist
          </p>
        </div>
        <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
          This email was sent to ${email}.<br/>
          <a href="https://therapistapp.vercel.app" style="color: #0f766e;">Visit our website</a>
        </div>
      </div>
    </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Subscription email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
