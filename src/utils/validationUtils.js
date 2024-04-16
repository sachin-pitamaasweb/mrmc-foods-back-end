// utils/validationUtils.js
exports.validateFormData = (formData) => {
    const errors = [];
  
    // Validate email
    if (!formData.email || !formData.email.trim()) {
      errors.push('Email is required');
    } else if (!validateEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }
  
    // Add more validation rules as needed
  
    return errors;
  };
  
  // Helper function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  