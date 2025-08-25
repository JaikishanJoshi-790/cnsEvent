import React, { useState } from 'react';
import emailService from '../utils/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile_number: '',
    email: '',
    event_date: '',
    number_of_guests: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const validation = emailService.validateFormData(formData);
    
    if (!validation.isValid) {
      setStatus({
        type: 'error',
        message: validation.errors.join('\n')
      });
      setLoading(false);
      return;
    }

    try {
      const result = await emailService.sendEmail(formData);
      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! We will contact you soon.'
        });
        setFormData({
          name: '',
          mobile_number: '',
          email: '',
          event_date: '',
          number_of_guests: '',
          description: ''
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Form fields */}
      <div className="form-group">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          disabled={loading}
        />
      </div>
      {/* Add other form fields similarly */}

      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}

      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;