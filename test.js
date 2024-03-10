const SendEmailOTP = require('./helper/SendEmailOTP');

const receiverEmail = 'anuwat.one@icloud.com';
const otpCode = '1234';

SendEmailOTP(receiverEmail, otpCode);
