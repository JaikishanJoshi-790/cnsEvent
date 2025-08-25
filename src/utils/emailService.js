// Email Service Utility for CNS Events
// This service handles form submissions and sends emails to admin using SMTP

// Note: For SMTP to work in the browser, you'll need a backend service
// This is a client-side implementation that can be used with a backend API

class EmailService {
  constructor() {
    this.adminEmail = 'cnseventsofficial@gmail.com';
    this.companyName = 'CNS Events';
  }

  // Send email using external API endpoint
  async sendEmail(formData) {
    try {
      console.log('Sending email with data:', formData);
      
      // Prepare form data for external API
      const apiData = {
        'Subject': `New Event Inquiry from ${formData.name}`,
        'message': formData.description || '',
        'name': formData.name,
        'phone': formData.mobile_number,
        'email': formData.email || 'Not provided',
        'Website': 'CNS Events',
        'recipient_email': this.adminEmail
      };

      console.log('API data prepared:', apiData);
      
      // Send to external API endpoint (you can change this URL)
      const response = await fetch('https://bixid.in/form-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      const data = await response.json();
      console.log('API response:', data);
      
      if (data.Status === "Success") {
        return {
          success: true,
          message: 'Email sent successfully! We will get back to you soon.',
          data: data
        };
      } else {
        throw new Error(data.message || 'Failed to send email');
      }

    } catch (error) {
      console.error('Email sending error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again or contact us directly.',
        error: error.message
      };
    }
  }





  // Validate form data
  validateFormData(formData) {
    const errors = [];

    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Please enter a valid name');
    }

    if (!formData.mobile_number || !/^[0-9]{10}$/.test(formData.mobile_number)) {
      errors.push('Please enter a valid 10-digit mobile number');
    }

    // Email is optional, so no validation needed

    if (!formData.description || formData.description.trim().length < 10) {
      errors.push('Please provide event details (minimum 10 characters)');
    }

    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  // Test API connection
  async testAPI() {
    try {
      console.log('Testing API connection...');
      
      // Test the external API endpoint
      const response = await fetch('https://bixid.in/form-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Subject': 'Test Connection',
          'message': 'Testing API connection',
          'name': 'Test User',
          'phone': '1234567890',
          'email': 'test@example.com',
          'Website': 'CNS Events',
          'recipient_email': this.adminEmail
        }),
      });

      const data = await response.json();
      console.log('API test response:', data);
      
      return { 
        success: true, 
        message: 'API connection test successful!',
        data: data
      };
    } catch (error) {
      console.error('API test failed:', error);
      return { 
        success: false, 
        message: 'API connection test failed', 
        error: error.message 
      };
    }
  }



  // Subscribe to newsletter
  async subscribeToNewsletter(email) {
    try {
      console.log('Subscribing to newsletter:', email);
      
      // Prepare newsletter data for external API
      const apiData = {
        'Subject': 'New Newsletter Subscription',
        'message': `New newsletter subscription from CNS Events website`,
        'name': 'Newsletter Subscriber',
        'phone': 'N/A',
        'email': email,
        'Website': 'CNS Events',
        'recipient_email': this.adminEmail
      };

      console.log('Newsletter API data:', apiData);
      
      // Send to external API endpoint (you can change this URL)
      const response = await fetch('https://bixid.in/form-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      const data = await response.json();
      console.log('Newsletter API response:', data);
      
      if (data.Status === "Success") {
        return {
          success: true,
          message: 'Successfully subscribed to newsletter!'
        };
      } else {
        throw new Error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return {
        success: false,
        message: 'Failed to subscribe. Please try again.'
      };
    }
  }
}

// Create and export email service instance
const emailService = new EmailService();

export default emailService;
