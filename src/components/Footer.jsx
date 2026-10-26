import React from 'react';
import siteConfig from '../siteConfig.js';

export default function Footer() {
  const cleanWaNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');

  return (
    <footer className="main-footer dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Footer Header Start */}
            <div className="footer-header">
              {/* Footer Book Appointment Item List Start */}
              <div className="footer-book-appointment-item-list">
                <div className="footer-book-appointment-item">
                  <div className="icon-box">
                    <img src="images/icon-footer-book-appointment-item.svg" alt="" />
                  </div>
                  <div className="footer-book-appointment-item-content">
                    <p>Book an Appointment</p>
                    <h2>Schedule your Dental Visit Today</h2>
                  </div>
                </div>
              </div>
              {/* Footer Book Appointment Item List End */}
              {/* Footer Book Appointment Button Start */}
              <div className="footer-book-appointment-btn">
                <a href="book-appointment" className="btn-default btn-highlighted">Book An Appointment</a>
              </div>
              {/* Footer Book Appointment Button End */}
            </div>
            {/* Footer Header End */}
          </div>
          <div className="col-xl-4">
            {/* About Footer Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="about-footer-logo">
                <a href="/">
                  <img src={siteConfig.logoWhite} alt={siteConfig.clinicName} />
                </a>
              </div>
              {/* Footer Logo End */}
              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>{siteConfig.aboutSummary}</p>
              </div>
              {/* About Footer Content End */}
              {/* About Opening Hours Start */}
              <div className="footer-opening-hours">
                <h2>Opening Hours</h2>
                <ul>
                  <li>{siteConfig.openingHoursWeekdays}</li>
                  <li>{siteConfig.openingHoursSunday}</li>
                </ul>
              </div>
              {/* About Opening Hours End */}
            </div>
            {/* About Footer End */}
          </div>
          <div className="col-xl-8">
            {/* Footer Links Box Start */}
            <div className="footer-links-box">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="about">About Us</a></li>
                  <li><a href="services">Services</a></li>
                  <li><a href="team">Our Team</a></li>
                  <li><a href="contact">Contact Us</a></li>
                </ul>
              </div>
              {/* Footer Links End */}
              {/* Footer Links Start */}
              <div className="footer-links">
                <h2>Our Services</h2>
                <ul>
                  <li><a href="service-single">General Dental Care</a></li>
                  <li><a href="service-single">Cosmetic Smile Care</a></li>
                  <li><a href="service-single">Tooth Extraction</a></li>
                  <li><a href="service-single">Gentle Smile Care</a></li>
                  <li><a href="service-single">Teeth Whitening</a></li>
                </ul>
              </div>
              {/* Footer Links End */}
              {/* Footer Contact Info Start */}
                <div className="footer-contact-info footer-links">
                  <h2>Contact Info</h2>
                  <div className="footer-contact-info-list">
                    <ul>
                      <li>{siteConfig.address}</li>
                      <li><a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a></li>
                      {cleanWaNumber && (
                        <li>
                          <a 
                            href={`https://wa.me/${cleanWaNumber}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                          >
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366" style={{ flexShrink: 0 }}>
                              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.7 19.74L5.53 16.71L5.34 16.41C4.56 15.17 4.15 13.73 4.15 11.91C4.15 7.37 7.85 3.67 12.05 3.67M9.23 7.03C9.06 7.03 8.78 7.09 8.54 7.35C8.3 7.61 7.62 8.24 7.62 9.53C7.62 10.82 8.56 12.06 8.69 12.23C8.82 12.4 10.5 15.06 13.12 16.13C15.23 16.99 15.66 16.82 16.12 16.78C16.58 16.74 17.6 16.18 17.81 15.58C18.02 14.99 18.02 14.48 17.96 14.37C17.9 14.26 17.74 14.2 17.5 14.08C17.26 13.96 16.07 13.38 15.85 13.3C15.63 13.21 15.47 13.17 15.31 13.41C15.15 13.65 14.68 14.2 14.54 14.37C14.4 14.54 14.26 14.56 14.02 14.44C13.78 14.32 12.99 14.07 12.06 13.24C11.34 12.59 10.85 11.79 10.71 11.55C10.57 11.31 10.69 11.18 10.81 11.06C10.92 10.95 11.06 10.77 11.18 10.63C11.3 10.49 11.34 10.39 11.42 10.23C11.5 10.07 11.46 9.93 11.4 9.81C11.34 9.69 10.87 8.52 10.67 8.04C10.48 7.57 10.28 7.63 10.13 7.63C9.99 7.62 9.83 7.62 9.67 7.62C9.51 7.62 9.27 7.68 9.07 7.9C8.87 8.12 8.32 8.64 8.32 9.71C8.32 10.78 9.1 11.81 9.21 11.96" />
                            </svg>
                            <span>WhatsApp: {siteConfig.phone}</span>
                          </a>
                        </li>
                      )}
                      <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
                    </ul>
                  </div>                            
                  <div className="footer-social-links">
                    <ul>
                      {siteConfig.social?.pinterest && (
                        <li><a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p" /></a></li>
                      )}
                      {siteConfig.social?.twitter && (
                        <li><a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X Twitter"><i className="fa-brands fa-x-twitter" /></a></li>
                      )}
                      {siteConfig.social?.facebook && (
                        <li><a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a></li>
                      )}
                      {siteConfig.social?.instagram && (
                        <li><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a></li>
                      )}
                      {cleanWaNumber && (
                        <li>
                          <a 
                            href={`https://wa.me/${cleanWaNumber}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="Chat on WhatsApp"
                            aria-label="WhatsApp"
                            style={{ backgroundColor: '#25D366', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff" aria-hidden="true">
                              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.7 19.74L5.53 16.71L5.34 16.41C4.56 15.17 4.15 13.73 4.15 11.91C4.15 7.37 7.85 3.67 12.05 3.67M9.23 7.03C9.06 7.03 8.78 7.09 8.54 7.35C8.3 7.61 7.62 8.24 7.62 9.53C7.62 10.82 8.56 12.06 8.69 12.23C8.82 12.4 10.5 15.06 13.12 16.13C15.23 16.99 15.66 16.82 16.12 16.78C16.58 16.74 17.6 16.18 17.81 15.58C18.02 14.99 18.02 14.48 17.96 14.37C17.9 14.26 17.74 14.2 17.5 14.08C17.26 13.96 16.07 13.38 15.85 13.3C15.63 13.21 15.47 13.17 15.31 13.41C15.15 13.65 14.68 14.2 14.54 14.37C14.4 14.54 14.26 14.56 14.02 14.44C13.78 14.32 12.99 14.07 12.06 13.24C11.34 12.59 10.85 11.79 10.71 11.55C10.57 11.31 10.69 11.18 10.81 11.06C10.92 10.95 11.06 10.77 11.18 10.63C11.3 10.49 11.34 10.39 11.42 10.23C11.5 10.07 11.46 9.93 11.4 9.81C11.34 9.69 10.87 8.52 10.67 8.04C10.48 7.57 10.28 7.63 10.13 7.63C9.99 7.62 9.83 7.62 9.67 7.62C9.51 7.62 9.27 7.68 9.07 7.9C8.87 8.12 8.32 8.64 8.32 9.71C8.32 10.78 9.1 11.81 9.21 11.96" />
                            </svg>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              {/* Footer Contact Info End */}
            </div>
            {/* Footer Links Box End */} 
          </div>
        </div>
      </div>
      {/* Footer Copyright Start */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Footer Copyright Text Start */}
              <div className="footer-copyright-text">
                <p>{siteConfig.copyright}</p>
              </div>
              {/* Footer Copyright Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copyright End */}
    </footer>
  );
}
