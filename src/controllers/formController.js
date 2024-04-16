// controllers/formController.js
const emailService = require('../services/emailService');
const validationUtils = require('../utils/validationUtils');

exports.submitForm = (req, res) => {
  const formData = req.body;

  // Validate form data
  const validationErrors = validationUtils.validateFormData(formData);
  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  // Send email
  emailService.sendEmail(formData)
    .then(() => {
      res.status(200).json({ message: 'Form submitted successfully' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    });
};
