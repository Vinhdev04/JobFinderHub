// server/services/emailService.js
// Gửi email thông báo (Welcome, Reset Password, Verification)
import nodemailer from 'nodemailer';

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    async sendMail({ to, subject, html }) {
        return this.transporter.sendMail({
            from: `"JobFinderHub" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        });
    }
}

export default new EmailService();
