import './contact.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    // phone: keep only digits and max 10
    if (name === 'phone') {
      const digits = value.replace(/[^0-9]/g, '').slice(0, 10);
      setForm((f) => ({ ...f, [name]: digits }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else {
      // basic email validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!re.test(form.email)) next.email = 'Enter a valid email address';
    }
    if (!form.phone) next.phone = 'Phone is required';
    else if (form.phone.length !== 10) next.phone = 'Phone must be 10 digits';
    if (!form.message.trim()) next.message = 'Please write your message';
    else if (form.message.trim().length < 50) next.message = 'Message must be at least 50 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        const error = await response.json();
        alert('Error: ' + (error.error || 'Failed to submit form'));
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="contact-root">
      <h2 className="title">KARUNYA DARSI'S PORTFOLIO <br /> Welcome to My Elegant Portfolio People!!</h2>

      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Info</Link>
      </div>

      <h1 className="heading">Contact Info:</h1>
      <div className="contact-details">
        <p>You can reach me via email and my contact number:</p>
        <p>
          Email: <a href="mailto:karunyadarsi@srmap.edu.in" className="email-link">karunyadarsi@srmap.edu.in</a>
        </p>
        <p>Contact Number: 1234567890</p>
      </div>

      {submitted ? (
        <p className="success">Thank you! Your message was submitted.</p>) : (
        <form onSubmit={onSubmit} noValidate>
          <label>Enter name:</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your full name"
            value={form.name}
            onChange={onChange}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}

          <label>Enter your email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            value={form.email}
            onChange={onChange}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <label>Enter your mobile number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter 10 digit phone no."
            value={form.phone}
            onChange={onChange}
            required
          />
          {errors.phone && <div className="error">{errors.phone}</div>}

          <label>Why do you want to contact me?</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write at least 50 characters"
            value={form.message}
            onChange={onChange}
            required
          />
          {errors.message && <div className="error">{errors.message}</div>}

          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}
