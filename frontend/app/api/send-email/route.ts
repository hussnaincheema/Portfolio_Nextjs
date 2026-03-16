import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, mobile, subject, message } = await req.json();

        // Nodemailer Transporter Setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use App Password here
            },
        });

        // Email content
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                <h2 style="background-color: #2563eb; color: #ffffff; padding: 15px; border-radius: 5px; margin-top: 0; text-align: center; font-size: 24px;">Message From ${name}</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Subject:</strong> ${subject}</p>

                <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #2563eb; border-radius: 5px;">
                    ${message.split('\n').map((line: string) => `<p>${line}</p>`).join('')}
                </div>

                <p style="font-size: 12px; color: #777; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                    This message was sent from your Portfolio Website Contact Form.
                </p>
            </div>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        
        return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }
}
