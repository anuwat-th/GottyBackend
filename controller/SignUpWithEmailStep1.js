const SignUpWithEmailSession = require('../model/SignUpWithEmailSession');
const User = require('../model/User')
const GenerateOTP = require('../helper/GenerateOTP');
const SendEmailOTP = require('../helper/SendEmailOTP');
const GenerateID = require('../helper/GenerateID');
const emailValidator = require('email-validator');

const SignUpWithEmailStep1 = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate the email is null
    if (email == '') {
      res.status(201).send('Email is null');
      return;
    }

    // Validate the email format
    if (!emailValidator.validate(email)) {
      res.status(202).send('Invalid email format');
      return;
    }

    // Check if the email already exists in the database
    const isEmailExist = await User.findOne({ email }).maxTimeMS(30000);

    if (isEmailExist) {
      res.sendStatus(203); // Email already exists
      return;
    }

    // Generate OTP and send it via email
    const generatedOtpCode = GenerateOTP(4);
    try {
      SendEmailOTP(email, generatedOtpCode);
    } catch (error) {
      console.error('Error sending OTP email:', error);
      res.sendStatus(500);
      return;
    }

    // Generate ID and create a new SignUpWithEmailSession document
    const generatedID = GenerateID(16);
    const startOtpReq = new Date();

    // Create a new SignUpWithEmailSession document
    const sessionData = new SignUpWithEmailSession({
      id: generatedID,
      email: email,
      otpCode: generatedOtpCode,
      startOtpReq: startOtpReq,
      isOtpPass: false,
      isEndSession: false,
    });

    // Save the new SignUpWithEmailSession document to the database
    try {
      await sessionData.save();
      res.status(200).send('OTP sent successfully');
    } catch (error) {
      console.error('Error saving SignUpWithEmailSession:', error);
      res.sendStatus(500);
    }
  } catch (error) {
    console.error('Error in SignUpWithEmailStep1:', error);
    res.sendStatus(500);
  }
};

module.exports = SignUpWithEmailStep1;
