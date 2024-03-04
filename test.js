const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://email-checker.p.rapidapi.com/verify/v1',
  params: {
    email: 'name@example.com'
  },
  headers: {
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
    'X-RapidAPI-Host': 'email-checker.p.rapidapi.com'
  }
};

async function verifyEmail() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

verifyEmail();
