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
        <div
        style="width: 1024px;height: 1024px;margin: 0; background-color: #C81D25; display: flex; flex-direction: column; border: 1px solid black;">
        <img src="https://orange-ant-kit.cyclic.app/gotty-logo" alt="Gotty logo"
            style="width: 224px; height: 224px; margin: 32px auto 0 auto;">
        <div
            style="width: 1024px; height: 752px;background-color: #FFFFFF; margin: 16px 0 0 0; border-radius: 64px 64px 0 0;">
            <h1
                style="width: 1024px;height: 80px; margin: 48px 0 0 0; color: #C81D25; font: 700 48px Arial, serif;display: flex;align-items: center;justify-content: center;">
                Wellcom to Gotty</h1>
            <p
                style="width: 1024px;height: 144px;margin: 16px 0 0 0;  color: #333335; font: 400 24px Arial;justify-content: center; display: flex;text-align: center;">
                This is your OTP code for Sign up to Gotty, <br>Please do not tell this code to another.
                the code can available for only 3 minutes.</p>
            <h2
                style="width: 464px; height: 176px;margin: 0 auto; border-radius: 40px; display: flex;justify-content: center;align-items: center; box-shadow: rgba(255, 90, 95, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;  font: 700 48px Arial, serif; color: #C81D25;">
                ${otpCode}</h2>
        </div>
    </div>
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

module.exports = SendEmailOTP;
