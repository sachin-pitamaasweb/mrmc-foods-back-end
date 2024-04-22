// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `work@tixteen.com`,
    pass: 'iqexkytojdibsrur'
  },
});

app.post('/api/send-email', (req, res) => {
  const { subject, message, to } = req.body;

  const mailOptions = {
    from: 'work@tixteen.com',
    to: to,
    subject: subject,
    text: message,
  };

  emailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'An error occurred while sending the email' });
    }

    res.json({ message: 'Email sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
