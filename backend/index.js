const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password here
    },
});

// Root Route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running!');
});

// Contact Route
app.post('/api/send-email', (req, res) => {
    const { name, email, mobile, subject, message } = req.body;

    // Email content
    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Message From ${name}</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #2563eb; border-radius: 5px;">
    ${message.split('\n').map(line => `<p>${line}</p>`).join('')}
</div>

            <p style="font-size: 12px; color: #777; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                This message was sent from your Portfolio Website Contact Form.
            </p>
        </div>
    `,
    };

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send message.' });
        } else {
            return res.status(200).json({ success: true, message: 'Message sent successfully!' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
