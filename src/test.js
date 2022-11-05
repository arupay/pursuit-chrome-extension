const twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio(
  'ACd7393b2badac6de36c17104f200a73e1',
  '0457e51dd7515746179b655d1dc1e7d4'
);

// Send the text message.
const sendSMS = async (phonenumber, message) => {
  return await client.messages.create({
    to: '+19173994364',
    from: '+13605449879',
    body: 'Hello from Twilio!',
  });
};

export default sendSMS;
