import React, { useState, useEffect } from 'react';
import siteConfig from '../siteConfig.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const cleanWaNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    setPagesOpen(false);
  };

  // Close on Escape key and window resize to desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth > 991) closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-nav-lock');
    } else {
      document.body.classList.remove('mobile-nav-lock');
    }
    return () => {
      document.body.classList.remove('mobile-nav-lock');
    };
  }, [isOpen]);

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <a className="navbar-brand" href="/" onClick={closeMenu}>
              <img src={siteConfig.logo} alt={siteConfig.clinicName} />
            </a>
            {/* Logo End */}

            {/* Desktop Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="about">About Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="services">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="blog">Blog</a></li>
                  <li className="nav-item submenu"><a className="nav-link" href="#">Pages</a>
                    <ul>
                      <li className="nav-item"><a className="nav-link" href="service-single">Service Details</a></li>
                      <li className="nav-item"><a className="nav-link" href="blog-single">Blog Details</a></li>
                      <li className="nav-item"><a className="nav-link" href="case-study">Case Study</a></li>
                      <li className="nav-item"><a className="nav-link" href="case-study-single">Case Study Details</a></li>
                      <li className="nav-item"><a className="nav-link" href="team">Our Team</a></li>
                      <li className="nav-item"><a className="nav-link" href="team-single">Team Details</a></li>
                      <li className="nav-item"><a className="nav-link" href="testimonials">Testimonials</a></li>
                      <li className="nav-item"><a className="nav-link" href="image-gallery">Image Gallery</a></li>
                      <li className="nav-item"><a className="nav-link" href="video-gallery">Video Gallery</a></li>
                      <li className="nav-item"><a className="nav-link" href="faqs">FAQs</a></li>
                      <li className="nav-item"><a className="nav-link" href="404">404</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact">Contact Us</a></li>
                  <li className="nav-item highlighted-menu"><a className="nav-link" href="book-appointment">Book An Appointment</a></li>
                </ul>
              </div>
              {/* Header Btn Start */}
              <div className="header-btn">
                <a href="book-appointment" className="btn-default">Book an Appointment</a>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Desktop Main Menu End */}

            {/* Mobile Hamburger Toggle Button (3 lines with smooth animation) */}
            <div className="navbar-toggle">
              <button
                type="button"
                className={`custom-hamburger-btn ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={isOpen}
              >
                <span className="hamburger-line line-1" />
                <span className="hamburger-line line-2" />
                <span className="hamburger-line line-3" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Nav Backdrop Overlay */}
        <div 
          className={`mobile-nav-backdrop ${isOpen ? 'show' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile Navigation Drawer with Smooth Slide Animation */}
        <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
          <div className="mobile-nav-header">
            <a href="/" onClick={closeMenu} className="mobile-nav-brand">
              <img src={siteConfig.logoWhite || siteConfig.logo} alt={siteConfig.clinicName} />
            </a>
            <button 
              type="button" 
              className="mobile-nav-close-btn" 
              onClick={closeMenu} 
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <div className="mobile-nav-body">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <a href="/" className="mobile-nav-link" onClick={closeMenu}>
                  <span>Home</span>
                  <i className="fa-solid fa-chevron-right nav-arrow" />
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="about" className="mobile-nav-link" onClick={closeMenu}>
                  <span>About Us</span>
                  <i className="fa-solid fa-chevron-right nav-arrow" />
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="services" className="mobile-nav-link" onClick={closeMenu}>
                  <span>Services</span>
                  <i className="fa-solid fa-chevron-right nav-arrow" />
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="blog" className="mobile-nav-link" onClick={closeMenu}>
                  <span>Blog</span>
                  <i className="fa-solid fa-chevron-right nav-arrow" />
                </a>
              </li>

              {/* Pages Submenu Accordion */}
              <li className={`mobile-nav-item has-submenu ${pagesOpen ? 'submenu-open' : ''}`}>
                <div 
                  className="mobile-nav-link submenu-trigger"
                  onClick={() => setPagesOpen(!pagesOpen)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setPagesOpen(!pagesOpen)}
                >
                  <span>Pages</span>
                  <i className={`fa-solid fa-chevron-down submenu-caret ${pagesOpen ? 'rotated' : ''}`} />
                </div>
                <div className={`mobile-submenu-collapse ${pagesOpen ? 'show' : ''}`}>
                  <ul className="mobile-submenu-list">
                    <li><a href="service-single" onClick={closeMenu}>Service Details</a></li>
                    <li><a href="blog-single" onClick={closeMenu}>Blog Details</a></li>
                    <li><a href="case-study" onClick={closeMenu}>Case Study</a></li>
                    <li><a href="case-study-single" onClick={closeMenu}>Case Study Details</a></li>
                    <li><a href="team" onClick={closeMenu}>Our Team</a></li>
                    <li><a href="team-single" onClick={closeMenu}>Team Details</a></li>
                    <li><a href="testimonials" onClick={closeMenu}>Testimonials</a></li>
                    <li><a href="image-gallery" onClick={closeMenu}>Image Gallery</a></li>
                    <li><a href="video-gallery" onClick={closeMenu}>Video Gallery</a></li>
                    <li><a href="faqs" onClick={closeMenu}>FAQs</a></li>
                    <li><a href="404" onClick={closeMenu}>404</a></li>
                  </ul>
                </div>
              </li>

              <li className="mobile-nav-item">
                <a href="contact" className="mobile-nav-link" onClick={closeMenu}>
                  <span>Contact Us</span>
                  <i className="fa-solid fa-chevron-right nav-arrow" />
                </a>
              </li>
            </ul>

            {/* Quick Actions in Mobile Drawer */}
            <div className="mobile-nav-actions">
              <a 
                href="book-appointment" 
                className="btn-default mobile-btn-appointment" 
                onClick={closeMenu}
              >
                <i className="fa-regular fa-calendar-check me-2" />
                Book An Appointment
              </a>

              {cleanWaNumber && (
                <a 
                  href={`https://wa.me/${cleanWaNumber}?text=Hello%20${encodeURIComponent(siteConfig.clinicName)}!%20I%20would%20like%20to%20inquire%20about%20dental%20appointments.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-whatsapp-btn"
                  onClick={closeMenu}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.7 19.74L5.53 16.71L5.34 16.41C4.56 15.17 4.15 13.73 4.15 11.91C4.15 7.37 7.85 3.67 12.05 3.67M9.23 7.03C9.06 7.03 8.78 7.09 8.54 7.35C8.3 7.61 7.62 8.24 7.62 9.53C7.62 10.82 8.56 12.06 8.69 12.23C8.82 12.4 10.5 15.06 13.12 16.13C15.23 16.99 15.66 16.82 16.12 16.78C16.58 16.74 17.6 16.18 17.81 15.58C18.02 14.99 18.02 14.48 17.96 14.37C17.9 14.26 17.74 14.2 17.5 14.08C17.26 13.96 16.07 13.38 15.85 13.3C15.63 13.21 15.47 13.17 15.31 13.41C15.15 13.65 14.68 14.2 14.54 14.37C14.4 14.54 14.26 14.56 14.02 14.44C13.78 14.32 12.99 14.07 12.06 13.24C11.34 12.59 10.85 11.79 10.71 11.55C10.57 11.31 10.69 11.18 10.81 11.06C10.92 10.95 11.06 10.77 11.18 10.63C11.3 10.49 11.34 10.39 11.42 10.23C11.5 10.07 11.46 9.93 11.4 9.81C11.34 9.69 10.87 8.52 10.67 8.04C10.48 7.57 10.28 7.63 10.13 7.63C9.99 7.62 9.83 7.62 9.67 7.62C9.51 7.62 9.27 7.68 9.07 7.9C8.87 8.12 8.32 8.64 8.32 9.71C8.32 10.78 9.1 11.81 9.21 11.96" />
                  </svg>
                  <span>WhatsApp Chat</span>
                </a>
              )}

              <a href={`tel:${siteConfig.phoneRaw}`} className="mobile-call-btn">
                <i className="fa-solid fa-phone me-2" />
                <span>{siteConfig.phone}</span>
              </a>

              <div className="mobile-nav-hours">
                <div className="hours-label">Clinic Hours:</div>
                <div className="hours-val">{siteConfig.openingHoursWeekdays}</div>
                <div className="hours-val">{siteConfig.openingHoursSunday}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
