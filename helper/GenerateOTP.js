/**********************************
 * Function for generate OTP code. it's return OTP code
 * 1 Parameter 
 *  - length : length of OTP code
 **********************************/

function GenerateOTP(length) {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(number);
}

module.exports = GenerateOTP;