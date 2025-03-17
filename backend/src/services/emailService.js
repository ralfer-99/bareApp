const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendEmail = async (to, weatherData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Hourly Weather Report',
    text: `Temperature: ${weatherData.temperature}, Description: ${weatherData.description}, City: ${weatherData.city}`,
  };

  await transporter.sendMail(mailOptions);
};