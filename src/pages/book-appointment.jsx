import React from 'react';
import siteConfig from '../siteConfig.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';

export default function Page_book_appointment() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Book an <span>Appointment</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Book an Appointment</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Appointmnet Section Start */}
        <div className="page-appointment">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* Page Appointment Box Start */}
                <div className="page-appointment-box">
                  {/* Page Appointment Box Image Start */}
                  <div className="page-appointment-box-image">
                    <figure className="image-anime reveal">
                      <img src="images/page-appointment-box-image.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Page Appointment Box Image End */}
                  {/* Book Appointment Content Box Start */}
                  <div className="book-appointment-content-box">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">Make an Appointment</h2>
                    </div>
                    {/* Section Title End */}
                    {/* Book Appointment Form Start */}
                    <div className="book-appointment-form">
                      <AppointmentForm />
                    </div>
                    {/* Book Appointment Form End */}
                  </div>
                  {/* Book Appointment Content Box End */}
                </div>
                {/* Page Appointment Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Appointmnet Section End */}
        {/* Intro Video Section Start */}
        <div className="intro-video dark-section parallaxie">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Intro Video Content Box Start */}
                <div className="intro-video-content-box">
                  {/* Intro Video Circle Start */}
                  <div className="intro-video-circle">
                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                      <img src="images/intro-video-circle.svg" alt="" />
                    </a>
                  </div>
                  {/* Intro Video Circle End */}
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Experience Advanced Aental Care like Never Before</h2>
                  </div>
                  {/* Section Title End */}
                </div>
                {/* Intro Video Content Box End */}
              </div>
            </div>
          </div>
          <div className="intro-video-benefit">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Intro Video Benefit Item List Start */}
                  <div className="intro-video-benefit-item-list">
                    {/* Intro Video Benefit Item Start */}
                    <div className="intro-video-benefit-item wow fadeInUp">
                      <div className="icon-box">
                        <img src="images/icon-intro-video-benefit-item-1.svg" alt="" />
                      </div>
                      <div className="intro-video-benefit-item-content">
                        <h3>3D Digital Scanner</h3>
                      </div>
                    </div>
                    {/* Intro Video Benefit Item End */}
                    {/* Intro Video Benefit Item Start */}
                    <div className="intro-video-benefit-item wow fadeInUp" data-wow-delay="0.2s">
                      <div className="icon-box">
                        <img src="images/icon-intro-video-benefit-item-2.svg" alt="" />
                      </div>
                      <div className="intro-video-benefit-item-content">
                        <h3>Digital X-Ray</h3>
                      </div>
                    </div>
                    {/* Intro Video Benefit Item End */}
                    {/* Intro Video Benefit Item Start */}
                    <div className="intro-video-benefit-item wow fadeInUp" data-wow-delay="0.4s">
                      <div className="icon-box">
                        <img src="images/icon-intro-video-benefit-item-3.svg" alt="" />
                      </div>
                      <div className="intro-video-benefit-item-content">
                        <h3>CAD/CAM Restoration</h3>
                      </div>
                    </div>
                    {/* Intro Video Benefit Item End */}
                    {/* Intro Video Benefit Item Start */}
                    <div className="intro-video-benefit-item wow fadeInUp" data-wow-delay="0.6s">
                      <div className="icon-box">
                        <img src="images/icon-intro-video-benefit-item-4.svg" alt="" />
                      </div>
                      <div className="intro-video-benefit-item-content">
                        <h3>Guided Implant Surgery</h3>
                      </div>
                    </div>
                    {/* Intro Video Benefit Item End */}
                  </div>
                  {/* Intro Video Benefit Item List End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Intro Video Section End */}
        {/* Why Choose Us Section Start */}
        <div className="why-choose-us">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                {/* Why Choose Content Start */}
                <div className="why-choose-us-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <span className="section-sub-title wow fadeInUp">Why Choose Us</span>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Expert Care you Can Trust for a Healthier Smile</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We provide reliable and advanced dental solutions designed to keep your smile healthy and confident with modern technology.</p>
                  </div>
                  {/* Section Title End */} 
                  {/* Why Choose Item List Start */}
                  <div className="why-choose-item-list wow fadeInUp" data-wow-delay="0.4s">
                    {/* Why Choose Item Start */}
                    <div className="why-choose-item">
                      <div className="icon-box">
                        <img src="images/icon-why-choose-item-1.svg" alt="" />
                      </div>
                      <div className="why-choose-item-content">
                        <h3>Advanced Technology for Treatments</h3>
                        <p>Comfort-focused procedures designed relaxing.</p>
                      </div>
                    </div>
                    {/* Why Choose Item End */}
                    {/* Why Choose Item Start */}
                    <div className="why-choose-item">
                      <div className="icon-box">
                        <img src="images/icon-why-choose-item-2.svg" alt="" />
                      </div>
                      <div className="why-choose-item-content">
                        <h3>Gentle &amp; Pain free Dental Procedures</h3>
                        <p>Comfort-focused procedures designed relaxing.</p>
                      </div>
                    </div>
                    {/* Why Choose Item End */}
                  </div>
                  {/* Why Choose Item List End */}
                  {/* Why Choose Btn Start */}
                  <div className="why-choose-btn wow fadeInUp" data-wow-delay="0.6s">
                    <a href="contact" className="btn-default">Learn More</a>
                  </div>
                  {/* Why Choose Btn End */}
                </div>
                {/* Why Choose Content End */}
              </div>
              <div className="col-xl-6">
                {/* Why Choose Image 1 Start */}
                <div className="why-choose-image wow fadeInUp" data-wow-delay="0.2s">
                  <figure>
                    <img src="images/why-choose-image.png" alt="" />
                  </figure>
                </div>
                {/* Why Choose Image 1 End */}
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us Section End */}
        {/* Our Faqs Section Start */}
        <div className="our-faqs light-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                {/* Faq Content Start */}
                <div className="faq-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <span className="section-sub-title wow fadeInUp">Frequently Asked Questions</span>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Everything you Need to Know About Us</h2>
                  </div>
                  {/* Section Title End */}
                  {/* Faqs Contact Item List Start */}
                  <div className="faq-contact-item-list wow fadeInUp" data-wow-delay="0.2s">
                    {/* Faqs Contact Item Start */}
                    <div className="faq-contact-item">
                      <div className="icon-box">
                        <img src="images/icon-phone-white.svg" alt="" />
                      </div>
                      <div className="faq-contact-item-content">
                        <p>Contact Us!</p>
                        <h3><a href={`tel:${siteConfig.emergencyPhoneRaw || siteConfig.phoneRaw}`}>{siteConfig.emergencyPhone || siteConfig.phone}</a></h3>
                      </div>
                    </div>
                    {/* Faqs Contact Item End */}
                    {/* Faqs Contact Item Start */}
                    <div className="faq-contact-item">
                      <div className="icon-box">
                        <img src="images/icon-phone-white.svg" alt="" />
                      </div>
                      <div className="faq-contact-item-content">
                        <p>E-mail Us</p>
                        <h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></h3>
                      </div>
                    </div>
                    {/* Faqs Contact Item End */}
                  </div>
                  {/* Faqs Contact Item List End */}
                </div>
              </div>
              <div className="col-xl-6">
                {/* FAQ Accordion Start */}
                <div className="faq-accordion" id="accordion">
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        How often should I visit the dentist?
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse show" role="region" aria-labelledby="heading1" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>It is generally recommended to visit the dentist every 6 months for routine checkups &amp; professional cleaning. However, depending on your individual oral health needs, your dentist may suggest more frequent visits.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        How can I book an appointment?
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" role="region" aria-labelledby="heading2" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>It is generally recommended to visit the dentist every 6 months for routine checkups &amp; professional cleaning. However, depending on your individual oral health needs, your dentist may suggest more frequent visits.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        What should I do in a dental emergency?
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" role="region" aria-labelledby="heading3" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>It is generally recommended to visit the dentist every 6 months for routine checkups &amp; professional cleaning. However, depending on your individual oral health needs, your dentist may suggest more frequent visits.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Do you offer teeth whitening services?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" role="region" aria-labelledby="heading4" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>It is generally recommended to visit the dentist every 6 months for routine checkups &amp; professional cleaning. However, depending on your individual oral health needs, your dentist may suggest more frequent visits.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */} 
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                    <h2 className="accordion-header" id="heading5">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse" role="region" aria-labelledby="heading5" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>It is generally recommended to visit the dentist every 6 months for routine checkups &amp; professional cleaning. However, depending on your individual oral health needs, your dentist may suggest more frequent visits.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */} 
                </div>
                {/* FAQ Accordion End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Faqs Section End */}
        {/* Our Testimonials Section Start */}
        <div className="our-testimonials">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-xl-12">
                {/* Section Title Start */}
                <div className="section-title section-title-center">
                  <span className="section-sub-title wow fadeInUp">Testimonials</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">What our Patients Say</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">We are proud to provide exceptional dental care and create positive experiences for every patient. Here's what our patients have to say about their journey.</p>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                {/* Testimonial Slider Start */}
                <div className="testimonial-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper" data-cursor-text="Drag">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        {/* Testimonial Item Start */}
                        <div className="testimonial-item">
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-author">
                              <div className="testimonial-item-author-image">
                                <figure className="image-anime">
                                  <img src="images/author-1.jpg" alt="" />
                                </figure>
                              </div>
                              <div className="testimonial-item-author-content">
                                <h2>Michael Johnson</h2>
                                <p>Marketing Manager</p>
                              </div>
                            </div>
                            <div className="testimonial-item-content">
                              <p>“I had a great experience at The staff was friendly and welcoming from the moment I walked in. The treatment was smooth, and handled with great care.”</p>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                          </div>
                        </div>
                        {/* Testimonial Item End */}
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        {/* Testimonial Item Start */}
                        <div className="testimonial-item">
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-author">
                              <div className="testimonial-item-author-image">
                                <figure className="image-anime">
                                  <img src="images/author-2.jpg" alt="" />
                                </figure>
                              </div>
                              <div className="testimonial-item-author-content">
                                <h2>Daniel Smith</h2>
                                <p>Business Owner</p>
                              </div>
                            </div>
                            <div className="testimonial-item-content">
                              <p>“The doctor explained every step clearly and made me feel completely at ease. The entire process was comfortable. I’m very happy with my improved smile.”</p>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                          </div>
                        </div>
                        {/* Testimonial Item End */}
                      </div>
                      {/* Testimonial Slide End */}   
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        {/* Testimonial Item Start */}
                        <div className="testimonial-item">
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-author">
                              <div className="testimonial-item-author-image">
                                <figure className="image-anime">
                                  <img src="images/author-3.jpg" alt="" />
                                </figure>
                              </div>
                              <div className="testimonial-item-author-content">
                                <h2>Olivia Brown</h2>
                                <p>Software Engineer</p>
                              </div>
                            </div>
                            <div className="testimonial-item-content">
                              <p>“The clinic is clean, modern &amp; very well maintained. The team is highly profesional &amp; attentive to every detail. I always feel safe &amp; well cared for during my visits.”</p>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                          </div>
                        </div>
                        {/* Testimonial Item End */}
                      </div>
                      {/* Testimonial Slide End */}   
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        {/* Testimonial Item Start */}
                        <div className="testimonial-item">
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-author">
                              <div className="testimonial-item-author-image">
                                <figure className="image-anime">
                                  <img src="images/author-4.jpg" alt="" />
                                </figure>
                              </div>
                              <div className="testimonial-item-author-content">
                                <h2>James Carter</h2>
                                <p>Software Engineer</p>
                              </div>
                            </div>
                            <div className="testimonial-item-content">
                              <p>“The treatment was smooth, painless, and the final result looks extremely natural. I am very satisfied with both the care and professionalism provided.”</p>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                            <i className="fa fa-solid fa-star" />
                          </div>
                        </div>
                        {/* Testimonial Item End */}
                      </div>
                      {/* Testimonial Slide End */}   
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}       
              </div>
              <div className="col-lg-12">
                {/* Section Footer Text Start */}
                <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                  {/* Satisfy Client Images End */}   
                  <p><span>Free</span>Experience expert care that delivers lasting results and happy smiles.</p>
                  <ul className="section-footer-border-list">
                    <li>Trusted By <b>58,900+</b> Users</li>
                    <li>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <b><span className="counter">4.9</span>/5</b>
                    </li>
                  </ul>
                </div>
                {/* Section Footer Text End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Testimonials Section End */}
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
