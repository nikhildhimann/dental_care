import React, { useState } from 'react';
import siteConfig from '../siteConfig.js';

export default function AppointmentForm({ className = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      alert("Please fill in your Name, Phone Number, and Preferred Date.");
      return;
    }

    setIsSubmitting(true);

    const prefix = (siteConfig.clinicName ? siteConfig.clinicName.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase() : "APT") || "APT";
    const bookingId = prefix + "-" + Math.floor(10000 + Math.random() * 90000);
    const clinicName = siteConfig.clinicName || "Dental Clinic";
    const rawNumber = (siteConfig.whatsappNumber || "1512555789").replace(/[^0-9]/g, '');
    const storageKey = siteConfig.storageKey || "clinic_appointments";

    // Formatted WhatsApp message with emojis and clean structure
    const waText = 
      `🦷 *New Appointment Booking Request*\n` +
      `🏥 *Clinic:* ${clinicName}\n\n` +
      `👤 *Patient Name:* ${formData.name.trim()}\n` +
      `📞 *Phone Number:* ${formData.phone.trim()}\n` +
      `✉️ *Email:* ${formData.email.trim() || 'Not Provided'}\n` +
      `📅 *Preferred Date:* ${formData.date}\n` +
      `💬 *Message:* ${formData.message.trim() || 'General Consultation'}\n\n` +
      `🔖 *Booking Ref:* #${bookingId}\n` +
      `_Please confirm my appointment slot. Thank you!_`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${rawNumber}?text=${encodedText}`;

    // Store in localStorage for clinic records
    try {
      const records = JSON.parse(localStorage.getItem(storageKey) || '[]');
      records.unshift({
        id: bookingId,
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem(storageKey, JSON.stringify(records));
    } catch (err) {
      console.warn('Storage warning:', err);
    }

    // Open WhatsApp in a new tab/window
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setBookingSuccess({
      id: bookingId,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      waUrl: waUrl
    });

    setIsSubmitting(false);

    // Reset form fields
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      message: ''
    });
  };

  const handleReset = () => {
    setBookingSuccess(null);
  };

  return (
    <div className={`book-appointment-form-wrapper ${className}`}>
      {bookingSuccess ? (
        <div className="appointment-success-card animate__animated animate__fadeIn">
          <div className="appointment-success-header">
            <div className="success-icon-wrap">
              <i className="fa-solid fa-circle-check" />
            </div>
            <div>
              <h4 className="success-headline">Appointment Details Submitted!</h4>
              <p className="success-subline">Booking Reference: <strong>#{bookingSuccess.id}</strong></p>
            </div>
          </div>
          <div className="appointment-success-body">
            <p>
              Thank you, <strong>{bookingSuccess.name}</strong>! Your appointment request for <strong>{bookingSuccess.date}</strong> has been prepared.
            </p>
            <p className="appointment-contact-note">
              <i className="fa-brands fa-whatsapp me-2" style={{ color: '#25D366', fontSize: '20px' }} />
              <strong>WhatsApp should open automatically</strong> with your appointment details ready to send.
            </p>
            
            <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={bookingSuccess.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-default"
                style={{
                  backgroundColor: '#25D366',
                  borderColor: '#25D366',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }} />
                Open WhatsApp Chat
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="btn-default"
                style={{ backgroundColor: '#031D4F', color: '#ffffff' }}
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
          <div className="row">
            <div className="form-group col-md-6">
              <label>Full Name*</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label>Phone Number*</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Select Date*</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label>Message</label>
              <textarea
                name="message"
                className="form-control"
                rows={4}
                placeholder="Any Additional Message or Specific Dental Concern..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <div className="book-appointment-form-btn">
                <button
                  type="submit"
                  className="btn-default"
                  disabled={isSubmitting}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa fa-spinner fa-spin" />
                      Connecting to WhatsApp...
                    </>
                  ) : (
                    <>
                      <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }} />
                      Book An Appointment on WhatsApp
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
