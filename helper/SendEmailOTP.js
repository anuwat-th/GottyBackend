/**********************************
 * Function for send OTP Code to user email
 * 2 Parameter 
 *  - receiverEmail : User email that wanted in sign up with
 *  - otpCode : OTP code that want to send
 **********************************/

const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const systemEmail = process.env.SYSTEM_EMAIL;
const systemPassword = process.env.SYSTEM_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: systemEmail,
        pass: systemPassword
    }
});

const htmlForm = (otpCode) => {
    return (
        `
            <div>
                <h1>${otpCode}</h1>
            </div
        `
    );
}

function SendEmailOTP(receiverEmail, otpCode) {
    const mailOptions = {
        from: systemEmail,
        to: receiverEmail,
        subject: 'OTP Code for Sign Up to Gotty',
        html: htmlForm(otpCode)
    };
    transporter.sendMail(mailOptions);
}

export default SendEmailOTP;
