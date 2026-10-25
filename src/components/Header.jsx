import React from 'react';
import siteConfig from '../siteConfig.js';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <a className="navbar-brand" href="/">
              <img src={siteConfig.logo} alt={siteConfig.clinicName} />
            </a>
            {/* Logo End */}
            {/* Main Menu Start */}
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
            {/* Main Menu End */}
            <div className="navbar-toggle" />
          </div>
        </nav>
        <div className="responsive-menu" />
      </div>
    </header>
  );
}
