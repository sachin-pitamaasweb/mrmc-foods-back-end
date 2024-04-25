// // server.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const app = express();
// const port = 8000;

// app.use(cors());
// app.use(express.json());


// const emailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: `work@tixteen.com`,
//     pass: 'iqexkytojdibsrur'
//   },
// });

// app.post('/api/send-email', (req, res) => {
//   const { subject, message, to } = req.body;

//   const mailOptions = {
//     from: 'work@tixteen.com',
//     to: to,
//     subject: subject,
//     text: message,
//   };

//   emailTransporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ error: 'An error occurred while sending the email' });
//     }

//     res.json({ message: 'Email sent successfully!' });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// const cron = require('node-cron');
// const axios = require('axios');

// // Schedule a task to run every 5 minutes
// cron.schedule('*/5 * * * *', async () => {
//   try {
//     const response = await axios.get('https://example.com'); // Replace with your desired URL
//     console.log(`Successfully hit URL. Status code: ${response.status}`);
//   } catch (error) {
//     console.error('Error hitting URL:', error.message);
//   }
// });

// console.log('Cron job set to auto-hit the URL every 5 minutes.');


const cron = require('node-cron');
const axios = require('axios');
const winston = require('winston');

// Set up winston for logging to console and a file
const logger = winston.createLogger({
  level: 'info', // Default log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'app.log' }) // Log to a file
  ],
});

// Schedule a task to run every 1 minute
cron.schedule('* * * * *', async () => {
  const url = 'https://api.ipify.org?format=json'; // URL to hit
  try {
    const response = await axios.get(url);
    logger.info(`Successfully hit URL. Status code: ${response.status}`);
  } catch (error) {
    logger.error(`Error hitting URL: ${error.message}`);
  }
});

logger.info('Cron job set to auto-hit the URL every 1 minute.');
