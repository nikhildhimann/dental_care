import React from 'react';
import siteConfig from '../siteConfig.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function Page_contact() {
  return (
    <>
      <div>
        {/* Preloader Start */}
        <div className="preloader">
          <div className="loading-container">
            <div className="loading" />
            <div id="loading-icon"><img src="images/loader.svg" alt="" /></div>
          </div>
        </div>
        {/* Preloader End */}
        {/* Header Start */}
        <Header />
        {/* Header End */}
        {/* Page Header Start */}
        <div className="page-header dark-section parallaxie">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Page Header Box Start */}
                <div className="page-header-box">
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Contact <span>Us</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Contact Us Section Start */}
        <div className="page-contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* Contact Us Content Box Start */}
                <div className="contact-us-content-box">
                  {/* Contact Us Body Start */}
                  <div className="contact-us-content-header">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <span className="section-sub-title wow fadeInUp">Contact Us</span>
                      <h2 className="wow text-anime-style-3" data-cursor="-opaque">Connect with Our Expert Dental Experts</h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">We're here to help you achieve a healthy, confident smile. Whether you need a routine checkup, emergency care.</p>
                    </div>
                    {/* Section Title End */}
                    {/* Contact Us Content List Start */}
                    <div className="contact-us-content-list wow fadeInUp" data-wow-delay="0.4s">
                      <ul>
                        <li>Secure and Private Patient Communication System</li>
                        <li>Instant Support for Dental Emergencies Anytime</li>
                        <li>Friendly and Supportive Patient Assistance Team</li>
                      </ul>
                    </div>
                    {/* Contact Us Content List End */}
                  </div>
                  {/* Contact Us Body End */}
                  {/* Contact Us Social Icons Start */}
                  <div className="contact-us-item-list wow fadeInUp" data-wow-delay="0.6s">
                    {/* Contact Us Item Start */}
                    <div className="contact-us-item">
                      <div className="icon-box">
                        <img src="images/icon-phone-white.svg" alt="" />
                      </div>
                      <div className="contact-us-item-content">
                        <p>Phone Number</p>
                        <h3><a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a></h3>
                      </div>
                    </div>
                    {/* Contact Us Item End */}
                    {/* Contact Us Item Start */}
                    <div className="contact-us-item">
                      <div className="icon-box">
                        <img src="images/icon-mail-white.svg" alt="" />
                      </div>
                      <div className="contact-us-item-content">
                        <p>Email Address</p>
                        <h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></h3>
                      </div>
                    </div>
                    {/* Contact Us Item End */}
                  </div>
                  {/* Contact Us Social Icons End */}                      
                </div>
                {/* Contact Us Content Box End */}
              </div>
              <div className="col-lg-6">
                {/* Contact Us Form Start */}
                <div className="contact-us-form">
                  {/* Contact Form Title Start */}
                  <div className="contact-form-title">
                    <h2 className="text-anime-style-3">Get In Touch</h2> 
                  </div>
                  {/* Contact Form Title End */}
                  {/* Contact Form Start */}
                  <div className="contact-form wow fadeInUp" data-wow-delay="0.2s">
                    <ContactForm />
                  </div>
                  {/* Contact Form End */}
                </div>
                {/* Contact Us Form End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Contact Us Section End */}
        {/* Google Map Start */}
        <div className="google-map">
          <div className="container">
            <div className="row section-row">
              <div className="col-lg-12">
                {/* Section Title Start */}
                <div className="section-title section-title-center">
                  <span className="section-sub-title wow fadeInUp">Visit Our Location</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Our Prime Dental Clinic Location</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">We are conveniently located to provide easy access for all your dental care needs in a comfortable and patient-friendly environment.</p>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Google Map Iframe Start */}
                <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.2s">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.278209478427!2d-0.12231632580492868!3d51.503019584494716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1776256795824!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                {/* Google Map Iframe End */}
              </div>
            </div>
          </div>
        </div>
        {/* Google Map End */}
        {/* Main Footer Start */}
        <Footer />
        {/* Main Footer End */}
        {/* Jquery Library File */}
        {/* Bootstrap js file */}
        {/* Validator js file */}
        {/* SlickNav js file */}
        {/* Swiper js file */}
        {/* Counter js file */}
        {/* Magnific js file */}
        {/* SmoothScroll */}
        {/* Parallax js */}
        {/* Image Comparision js */}
        {/* MagicCursor js file */}
        {/* Text Effect js file */}
        {/* YTPlayer js File */}
        {/* Wow js file */}
        {/* Main Custom js file */}
      </div>
      
    </>
  );
}
