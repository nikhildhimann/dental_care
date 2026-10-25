import React from 'react';
import siteConfig from '../siteConfig.js';

export default function FloatingWhatsApp() {
  const cleanNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');
  if (!cleanNumber) return null;

  const defaultMsg = encodeURIComponent(
    `Hello ${siteConfig.clinicName}! I would like to inquire about your dental services and schedule an appointment.`
  );

  return (
    <a
      href={`https://wa.me/${cleanNumber}?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
      <span className="floating-whatsapp-tooltip">Chat with {siteConfig.clinicName}</span>
    </a>
  );
}
