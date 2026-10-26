import React, { useState } from 'react';
import siteConfig from '../siteConfig.js';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const cleanNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');
  if (!cleanNumber) return null;

  const defaultMsg = encodeURIComponent(
    `Hello ${siteConfig.clinicName}! I would like to inquire about your dental services and schedule an appointment.`
  );

  return (
    <div 
      className="floating-whatsapp-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={`https://wa.me/${cleanNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring waves */}
        <span className="whatsapp-pulse-ring" />
        <span className="whatsapp-pulse-ring delay" />

        {/* WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="34" 
          height="34" 
          fill="#ffffff" 
          className="whatsapp-svg-icon"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.7 19.74L5.53 16.71L5.34 16.41C4.56 15.17 4.15 13.73 4.15 11.91C4.15 7.37 7.85 3.67 12.05 3.67M9.23 7.03C9.06 7.03 8.78 7.09 8.54 7.35C8.3 7.61 7.62 8.24 7.62 9.53C7.62 10.82 8.56 12.06 8.69 12.23C8.82 12.4 10.5 15.06 13.12 16.13C15.23 16.99 15.66 16.82 16.12 16.78C16.58 16.74 17.6 16.18 17.81 15.58C18.02 14.99 18.02 14.48 17.96 14.37C17.9 14.26 17.74 14.2 17.5 14.08C17.26 13.96 16.07 13.38 15.85 13.3C15.63 13.21 15.47 13.17 15.31 13.41C15.15 13.65 14.68 14.2 14.54 14.37C14.4 14.54 14.26 14.56 14.02 14.44C13.78 14.32 12.99 14.07 12.06 13.24C11.34 12.59 10.85 11.79 10.71 11.55C10.57 11.31 10.69 11.18 10.81 11.06C10.92 10.95 11.06 10.77 11.18 10.63C11.3 10.49 11.34 10.39 11.42 10.23C11.5 10.07 11.46 9.93 11.4 9.81C11.34 9.69 10.87 8.52 10.67 8.04C10.48 7.57 10.28 7.63 10.13 7.63C9.99 7.62 9.83 7.62 9.67 7.62C9.51 7.62 9.27 7.68 9.07 7.9C8.87 8.12 8.32 8.64 8.32 9.71C8.32 10.78 9.1 11.81 9.21 11.96" />
        </svg>

        {/* Online active indicator dot */}
        <span className="whatsapp-online-dot" />

        {/* Tooltip / Mini Chat Badge */}
        <span className="floating-whatsapp-tooltip">
          <span className="whatsapp-tooltip-title">Chat with Us</span>
          <span className="whatsapp-tooltip-sub">Online • Instant Reply</span>
        </span>
      </a>
    </div>
  );
}
