import { useState } from 'react';
import { SUCCESS_MESSAGE_TIMEOUT } from '../constants';

export const useWaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
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

    // Simulate form submission (only in development)
    if (import.meta.env.DEV) {
      console.log('Form submitted:', formData);
    }
    setSubmitted(true);

    // Reset form after timeout
    setTimeout(() => {
      setFormData({ name: '', email: '' });
      setSubmitted(false);
    }, SUCCESS_MESSAGE_TIMEOUT);
  };

  return {
    formData,
    submitted,
    errors,
    handleChange,
    handleSubmit
  };
};
