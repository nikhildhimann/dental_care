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
                    <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
                  </ul>
                </div>                            
                <div className="footer-social-links">
                  <ul>
                    {siteConfig.social?.pinterest && (
                      <li><a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-pinterest-p" /></a></li>
                    )}
                    {siteConfig.social?.twitter && (
                      <li><a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter" /></a></li>
                    )}
                    {siteConfig.social?.facebook && (
                      <li><a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f" /></a></li>
                    )}
                    {siteConfig.social?.instagram && (
                      <li><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" /></a></li>
                    )}
                    {cleanWaNumber && (
                      <li>
                        <a 
                          href={`https://wa.me/${cleanWaNumber}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          title="WhatsApp"
                          style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                        >
                          <i className="fa-brands fa-whatsapp" />
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
