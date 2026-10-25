import React, { useState } from 'react';
import siteConfig from '../siteConfig.js';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fname.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert("Please fill in your Name, Phone Number, and Email.");
      return;
    }

    setIsSubmitting(true);

    const clinicName = siteConfig.clinicName || "Dental Clinic";
    const rawNumber = (siteConfig.whatsappNumber || "1512555789").replace(/[^0-9]/g, '');
    const storageKey = (siteConfig.storageKey || "clinic_appointments") + "_inquiries";

    const fullName = `${formData.fname.trim()} ${formData.lname.trim()}`.trim();

    // Formatted WhatsApp message
    const waText = 
      `💬 *New Website Inquiry (Get In Touch)*\n` +
      `🏥 *Clinic:* ${clinicName}\n\n` +
      `👤 *Name:* ${fullName}\n` +
      `📞 *Phone:* ${formData.phone.trim()}\n` +
      `✉️ *Email:* ${formData.email.trim()}\n` +
      `📝 *Message:* ${formData.message.trim() || 'General Inquiry'}\n\n` +
      `_Please get back to me. Thank you!_`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${rawNumber}?text=${encodedText}`;

    // Store in localStorage
    try {
      const records = JSON.parse(localStorage.getItem(storageKey) || '[]');
      records.unshift({
        name: fullName,
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem(storageKey, JSON.stringify(records));
    } catch (err) {
      console.warn("Storage warning:", err);
    }

    // Direct WhatsApp open
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn("Popup blocked or not supported:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted({
        name: fullName,
        waUrl: waUrl
      });
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: ''
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div 
        className="contact-success-card"
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '30px 24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          textAlign: 'center',
          border: '1px solid #e0f2fe'
        }}
      >
        <div 
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#e6f9ed',
            color: '#10b981',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            marginBottom: '16px'
          }}
        >
          <i className="fa fa-check" />
        </div>
        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px', color: '#0f172a' }}>
          Thank You, {submitted.name}!
        </h3>
        <p style={{ color: '#475569', fontSize: '15px', marginBottom: '18px', lineHeight: '1.5' }}>
          Your message has been received! WhatsApp should open automatically with your message ready to send.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={submitted.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-default"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: '#25D366', borderColor: '#25D366' }}
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }} />
            Open WhatsApp Chat
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="btn-default btn-outline"
            style={{ padding: '12px 20px' }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="form-group col-md-6 mb-3">
          <input
            type="text"
            name="fname"
            className="form-control"
            id="fname"
            placeholder="First Name *"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-md-6 mb-3">
          <input
            type="text"
            name="lname"
            className="form-control"
            id="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6 mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="E-mail Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-md-6 mb-3">
          <input
            type="tel"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-md-12 mb-3">
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows={4}
            placeholder="Write Message Here..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <div className="contact-form-btn">
            <button
              type="submit"
              className="btn-default"
              disabled={isSubmitting}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              {isSubmitting ? (
                <>
                  <i className="fa fa-spinner fa-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }} />
                  Send Message on WhatsApp
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
