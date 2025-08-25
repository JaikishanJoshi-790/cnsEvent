import React, { useState } from 'react';
import emailService from '../utils/emailService';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      setLoading(false);
      return;
    }

    try {
      const result = await emailService.subscribeToNewsletter(email);
      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message
        });
        setEmail('');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Failed to subscribe. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="newsletter-form">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      
      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}

      <button type="submit" disabled={loading}>
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default Newsletter;