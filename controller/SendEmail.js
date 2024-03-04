// node-api/mailer.js
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    try {
        // Create Nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'gotty.system@gmail.com',
                pass: 'Hip2a91hacwoUocsp'
            }
        });

        // Define email options
        let mailOptions = {
            from: 'gotty.system@gmail.com',
            to: to,
            subject: subject,
            text: text
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info.response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };
