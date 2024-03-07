const emailValidator = require("email-validator");

const GenerateID = require('../helper/GenerateID').default;
const GenerateOTP = require('../helper/GenerateOTP');
const SendEmailOTP = require('../helper/SendEmailOTP');

const SignUpWithEmailSession = require('../model/SignUpWithEmailSession');
const User = require('../model/User');

exports.SignUpWithEmailStep1 = async (req, res) => {
  const { email } = req.body;

  if (!emailValidator.validate(email)) {
    res.status(401);
    return 0;
  }

  try {
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      res.sendStatus(402);
      return 0;
    }
  } catch (error) {
    res.sendStatus(500);
    return 0;
  }

  const generatedOtpCode = GenerateOTP(4);

  try {
    SendEmailOTP(email, generatedOtpCode);
  } catch {
    res.status(500);
    return 0;
  }

  const generatedID = GenerateID(16);
  const startOtpReq = new Date();

  // Create a new SignUpWithEmailSession document
  const signUpSession = new SignUpWithEmailSession({
    id: generatedID,
    email: email,
    startOtpReq: startOtpReq
  });

  try {
    // Save the new SignUpWithEmailSession document to the database
    await signUpSession.save();
  } catch (error) {
    console.error('Error saving SignUpWithEmailSession:', error);
    res.sendStatus(500);
    return;
  }

};
