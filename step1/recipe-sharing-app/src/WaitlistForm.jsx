import React, { useState } from 'react';
import { SUCCESS_MESSAGE_TIMEOUT } from './constants';

function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // console.log('Form submitted:', formData); // Removed for production
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '' });
      setSubmitted(false);
    }, SUCCESS_MESSAGE_TIMEOUT);
  };

  return (
    <div className="waitlist-card">
      <h2 className="card-title">Join the Waitlist</h2>
      <p className="card-description">
        Be the first to know when we launch. Sign up now and get exclusive early access!
      </p>

      {submitted ? (
        <div className="success-message">
          <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p>Thank you for joining our waitlist!</p>
        </div>
      ) : (
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'input-error' : ''}
                            placeholder="Enter your name"
                            aria-describedby={errors.name ? 'name-error' : undefined}
                          />
                          {errors.name && <span id="name-error" className="error-text">{errors.name}</span>}          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'input-error' : ''}
                            placeholder="Enter your email"
                            aria-describedby={errors.email ? 'email-error' : undefined}
                          />
                          {errors.email && <span id="email-error" className="error-text">{errors.email}</span>}          </div>

          <button type="submit" className="submit-button">
            Join Waitlist
          </button>
        </form>
      )}
    </div>
  );
}

export default WaitlistForm;
