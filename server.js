// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const formController = require('./src/controllers/formController');


const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Middleware
app.use(bodyParser.json());

app.post('/submit-form',  formController.submitForm);
const PORT = process.env.PORT || 8000;
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
