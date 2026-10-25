import React from 'react';
import siteConfig from '../siteConfig.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';

export default function Page_index_video() {
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
        {/* Hero Section Start */}
        <div className="hero hero-video dark-section">
          {/* Video Start */}
          <div className="hero-bg-video">
            {/* Selfhosted Video Start */}
            {/* <video autoplay muted playsinline loop id="herovideo"><source src="images/hero-bg-video.mp4" type="video/mp4"></video> */}
            <video autoPlay muted playsInline loop id="myvideo"><source src={siteConfig.heroVideo || "videos/hero-video.mp4"} type="video/mp4" /></video>
            {/* Selfhosted Video End */}
            {/* Youtube Video Start */}
            {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
            {/* Youtube Video End */}
          </div>
          {/* Video End */}
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                {/* Hero Content Start */}
                <div className="hero-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <span className="section-sub-title wow fadeInUp">Trusted Dental Care</span>
                    <h1 className="text-anime-style-3" data-cursor="-opaque">A Healthier Smile Starts Here Today and <span>Beyond Care</span></h1>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Experience personalized dental care with modern treatments, gentle expertise, and a team dedicated to keeping your smile healthy and confident.</p>
                  </div>
                  {/* Section Title End */}
                  {/* Hero Content Body Start */}
                  <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                    {/* Hero Button Start */}
                    <div className="hero-btn">
                      <a href="contact" className="btn-default btn-highlighted">Explore Treatments</a>
                    </div>
                    {/* Hero Button End */}
                    {/* Hero Client Box Start */}
                    <div className="hero-client-box">
                      {/* Satisfy Client Image Start */}
                      <div className="satisfy-client-images">
                        <div className="satisfy-client-image">
                          <figure className="image-anime">
                            <img src="images/author-1.jpg" alt="" />
                          </figure>
                        </div>
                        <div className="satisfy-client-image">
                          <figure className="image-anime">
                            <img src="images/author-2.jpg" alt="" />
                          </figure>
                        </div>
                        <div className="satisfy-client-image">
                          <figure className="image-anime">
                            <img src="images/author-3.jpg" alt="" />
                          </figure>
                        </div>
                      </div>
                      {/* Satisfy Client Image End */}
                      {/* Hero Client Content Start */}
                      <div className="hero-client-content">
                        <h2><span className="counter">4.9</span>/5<i className="fa fa-solid fa-star" /></h2>
                        <p>More Than 2500 Reviews</p>
                      </div>
                      {/* Hero Client Content End */}
                    </div>
                    {/* Hero Client Box End */}
                  </div>
                  {/* Hero Content Body End */}
                </div>
                {/* Hero Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End */}
        {/* About Us Section Start */}
        <div className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                {/* About Us Image Box Start */}
                <div className="about-us-image-box wow fadeInUp">
                  {/* About Us Image Start */}
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <img src="images/about-us-image.jpg" alt="" />
                    </figure>
                  </div>
                  {/* About Us Image End */}
                  {/* About Us Blockquote Box Start */}
                  <div className="about-us-blockquote-box">
                    <p>We deliver safe, comfortable, and reliable dental care for every patient.</p>
                    <a href="about">Know More</a>
                  </div>
                  {/* About Us Blockquote Box End */}
                </div>
                {/* About Us Image Box End */}
              </div>
              <div className="col-xl-6">
                {/* About Us Content Start */}
                <div className="about-us-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <span className="section-sub-title wow fadeInUp">About Us</span>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Caring for Your Smile with Expertise &amp; Compassion</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We believe that a healthy smile is the foundation of overall well-being. Our clinic is equipped with modern dental technology.</p>
                  </div>
                  {/* Section Title End */}
                  {/* About Highlighted Item List Start */}
                  <div className="about-highlighted-item-list wow fadeInUp" data-wow-delay="0.4s">
                    {/* About Highlighted Item Start */}
                    <div className="about-highlighted-item wow fadeInUp">
                      <p>“We are dedicated to providing high-quality dental care in friendly environment for patients of all ages.”</p>
                    </div>   
                    {/* About Highlighted Item End */}
                  </div>
                  {/* About Highlighted Item List End */}
                  {/* About Us Item List Start */}
                  <div className="about-us-item-list wow fadeInUp" data-wow-delay="0.6s">
                    {/* About Us Item Start */}
                    <div className="about-us-item">
                      <div className="icon-box">
                        <img src="images/icon-about-us-item.svg" alt="" />
                      </div>
                      <div className="about-us-item-content">
                        <h3>Affordable Pricing</h3>
                        <p>Transparent and budget-friendly dental solutions.</p>
                      </div>
                    </div>
                    {/* About Us Item End */}
                  </div>
                  {/* About Us Item List End */}
                  {/* About Us Content Footer Start */}
                  <div className="about-us-content-footer wow fadeInUp" data-wow-delay="0.8s">
                    {/* About Us Btn Start */}
                    <div className="about-us-btn">
                      <a href="about" className="btn-default">More About Us</a>
                    </div>
                    {/* About Us Btn End */}
                    {/* About Us Author Box Start */}
                    <div className="about-us-author-box">
                      <div className="satisfy-client-images">
                        <div className="satisfy-client-image">
                          <figure className="image-anime">
                            <img src="images/author-1.jpg" alt="" />
                          </figure>
                        </div>
                        <div className="satisfy-client-image">
                          <figure className="image-anime">
                            <img src="images/author-2.jpg" alt="" />
                          </figure>
                        </div>
                        <div className="satisfy-client-image">
                          <figure className="image-anime">
                            <img src="images/author-3.jpg" alt="" />
                          </figure>
                        </div>
                      </div>
                      <div className="about-author-box-content">
                        <h3>Successful Treatments</h3>
                        <p>Quality care with proven result</p>
                      </div>
                    </div>
                    {/* About Us Author Box End */}
                  </div>
                  {/* About Us Content Footer End */}
                </div>
                {/* About Us Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* About Us Section End */}
        {/* Our Services Section Start */}
        <div className="our-services light-section">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-xl-6">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Our Services</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Helping You Achieve A Healthy And Confident Smile</h2>
                </div>
                {/* Section Title End */}
              </div>
              <div className="col-xl-6">
                {/* Section Button Start */}
                <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                  <a href="services" className="btn-default">View All Services</a>
                </div>
                {/* Section Button End */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                {/*  Service Item Start */}
                <div className="service-item wow fadeInUp">
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="service-item-title">
                      <p>01</p>
                      <h2><a href="service-single">General Dental Care</a></h2>
                    </div>    
                    <div className="icon-box">
                      <img src="images/icon-service-item-1.svg" alt="" />
                    </div>                        
                  </div>
                  {/* Service Item Header End */}
                  {/* Service Item Content Start */}
                  <div className="service-item-content">
                    <p>Routine checkups, cleanings, and preventive care for all ages.</p>
                  </div>
                  {/* Service Item Content End */}
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src="images/service-image-1.jpg" alt="" />
                      </figure>
                    </a>
                  </div>                      
                  {/* Service Image End */}
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/*  Service Item Start */}
                <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="service-item-title">
                      <p>02</p>
                      <h2><a href="service-single">Cosmetic Smile Care</a></h2>
                    </div>    
                    <div className="icon-box">
                      <img src="images/icon-service-item-2.svg" alt="" />
                    </div>                        
                  </div>
                  {/* Service Item Header End */}
                  {/* Service Item Content Start */}
                  <div className="service-item-content">
                    <p>Routine checkups, cleanings, and preventive care for all ages.</p>
                  </div>
                  {/* Service Item Content End */}
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src="images/service-image-2.jpg" alt="" />
                      </figure>
                    </a>
                  </div>                      
                  {/* Service Image End */}
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/*  Service Item Start */}
                <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="service-item-title">
                      <p>03</p>
                      <h2><a href="service-single">Orthodontic Alignment Care</a></h2>
                    </div>    
                    <div className="icon-box">
                      <img src="images/icon-service-item-3.svg" alt="" />
                    </div>                        
                  </div>
                  {/* Service Item Header End */}
                  {/* Service Item Content Start */}
                  <div className="service-item-content">
                    <p>Routine checkups, cleanings, and preventive care for all ages.</p>
                  </div>
                  {/* Service Item Content End */}
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src="images/service-image-3.jpg" alt="" />
                      </figure>
                    </a>
                  </div>                      
                  {/* Service Image End */}
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-12">
                {/* Section Footer Text Start */}
                <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
                  {/* Satisfy Client Images Start */}
                  <div className="satisfy-client-images">
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img src="images/author-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="satisfy-client-image add-more">
                      <img src="images/icon-phone-white.svg" alt="" />
                    </div>
                  </div>
                  {/* Satisfy Client Images End */}    
                  <p>Your perfect smile is just one appointment away. <a href="book-appointment">Book An Appointment</a></p>
                </div>
                {/* Section Footer Text End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Services Section End */}
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
        {/* Our Team Section Start */}
        <div className="our-team">
          <div className="container">
            <div className="row section-row">
              <div className="col-xl-12">
                {/* Section Title Start */}
                <div className="section-title section-title-center">
                  <span className="section-sub-title wow fadeInUp">Our Specialists</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Our Dedicated Organic Team</h2>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                {/* Team Item Start */}
                <div className="team-item wow fadeInUp">
                  <div className="team-item-image">
                    <a href="team-single" data-cursor-text="View">
                      <figure>
                        <img src="images/team-image-1.jpg" alt="" />
                      </figure>
                    </a>
                    <div className="team-item-social-icon">
                      <ul>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-pinterest-p" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h2><a href="team-single">Dr. Michael Carter</a></h2>
                    <p>Chief Dentist &amp; Implant Specialist</p>
                  </div>
                </div>
                {/* Team Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Team Item Start */}
                <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="team-item-image">
                    <a href="team-single" data-cursor-text="View">
                      <figure>
                        <img src="images/team-image-2.jpg" alt="" />
                      </figure>
                    </a>
                    <div className="team-item-social-icon">
                      <ul>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-pinterest-p" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h2><a href="team-single">Dr. Emily Johnson</a></h2>
                    <p>Cosmetic Dentist</p>
                  </div>
                </div>
                {/* Team Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Team Item Start */}
                <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="team-item-image">
                    <a href="team-single" data-cursor-text="View">
                      <figure>
                        <img src="images/team-image-3.jpg" alt="" />
                      </figure>
                    </a>
                    <div className="team-item-social-icon">
                      <ul>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-pinterest-p" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f" /></a></li>
                        <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h2><a href="team-single">Dr. Daniel Smith</a></h2>
                    <p>Orthodontist</p>
                  </div>
                </div>
                {/* Team Item End */}
              </div>
              <div className="col-lg-12">
                {/* Section Footer Text Start */}
                <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
                  {/* Satisfy Client Images Start */}
                  <div className="satisfy-client-images">
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img src="images/author-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="satisfy-client-image add-more">
                      <img src="images/icon-phone-white.svg" alt="" />
                    </div>
                  </div>
                  {/* Satisfy Client Images End */}    
                  <p>Your perfect smile is just one appointment away. <a href="team">View our team members</a></p>
                </div>
                {/* Section Footer Text End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Team Section End */}
        {/* After Before Section Start */}
        <div className="our-transformation light-section">
          <div className="container">
            <div className="row section-row">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Before &amp; After</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Real Results Confident Smiles</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Our before-and-after cases showcase the effectiveness of our treatments, from smile makeovers to restorative procedures.</p>
              </div>
              {/* Section Title End */}
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                {/* Transformation Image Start */}
                <div className="transformation-image-box wow fadeInUp">
                  <div className="transformation_image">
                    <img src="images/transformation-img-before-1.jpg" alt="" />
                    <img src="images/transformation-img-after-1.jpg" alt="" />
                  </div>
                  <div className="transformation-image-title">
                    <h3>Teeth Whitening</h3>
                  </div>
                </div>
                {/* Transformation Image End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Transformation Image Start */}
                <div className="transformation-image-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="transformation_image">
                    <img src="images/transformation-img-before-2.jpg" alt="" />
                    <img src="images/transformation-img-after-2.jpg" alt="" />
                  </div>
                  <div className="transformation-image-title">
                    <h3>Smile Makeover</h3>
                  </div>
                </div>
                {/* Transformation Image End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Transformation Image Start */}
                <div className="transformation-image-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="transformation_image">
                    <img src="images/transformation-img-before-3.jpg" alt="" />
                    <img src="images/transformation-img-after-3.jpg" alt="" />
                  </div>
                  <div className="transformation-image-title">
                    <h3>Braces / Aligners</h3>
                  </div>
                </div>
                {/* Transformation Image End */}
              </div>
            </div>
          </div>
        </div>
        {/* After Before Section End */}
        {/* Our Case Study Section Start */}
        <div className="our-case-study">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-xl-6">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Case Studies</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Real Cases Deliver Trusted Dental Treatment</h2>
                </div>
                {/* Section Title End */}
              </div>
              <div className="col-xl-6">
                {/* Section Content Btn Start */}
                <div className="section-content-btn">
                  {/* Section Title Content Start */}
                  <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                    <p>we focus on delivering results that truly make a difference. Our case studies highlight real patient journeys.</p>
                  </div>
                  {/* Section Title Content End */}
                  {/* Section Button Start */}
                  <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                    <a className="btn-default" href="case-study">Explore More</a>
                  </div>
                  {/* Section Button End */}
                </div>
                {/* Section Content Btn End */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                {/* Case Study Item Start */}
                <div className="case-study-item wow fadeInUp">
                  {/* Case Study Item Image Box Start */}
                  <div className="case-study-item-image-box">
                    <div className="case-study-item-image">
                      <a href="case-study-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/case-study-image-1.jpg" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="case-study-item-btn">
                      <a href="case-study-single">
                        <img src="images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  {/* Case Study Item Image Box End */}
                  {/* Case Study Item Contant Start */}
                  <div className="case-study-item-contant">
                    <ul>
                      <li><a href="#">Implants</a></li>
                    </ul>
                    <h2><a href="case-study-single">Dental Implant Restoration Results</a></h2>
                  </div>
                  {/* Case Study Item Contant End */}
                </div>
                {/* Case Study Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Case Study Item Start */}
                <div className="case-study-item wow fadeInUp" data-wow-delay="0.2s">
                  {/* Case Study Item Image Box Start */}
                  <div className="case-study-item-image-box">
                    <div className="case-study-item-image">
                      <a href="case-study-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/case-study-image-2.jpg" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="case-study-item-btn">
                      <a href="case-study-single">
                        <img src="images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  {/* Case Study Item Image Box End */}
                  {/* Case Study Item Contant Start */}
                  <div className="case-study-item-contant">
                    <ul>
                      <li><a href="#">Orthodontics</a></li>
                    </ul>
                    <h2><a href="case-study-single">Orthodontic Treatment Result Success</a></h2>
                  </div>
                  {/* Case Study Item Contant End */}
                </div>
                {/* Case Study Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Case Study Item Start */}
                <div className="case-study-item wow fadeInUp" data-wow-delay="0.4s">
                  {/* Case Study Item Image Box Start */}
                  <div className="case-study-item-image-box">
                    <div className="case-study-item-image">
                      <a href="case-study-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/case-study-image-3.jpg" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="case-study-item-btn">
                      <a href="case-study-single">
                        <img src="images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  {/* Case Study Item Image Box End */}
                  {/* Case Study Item Contant Start */}
                  <div className="case-study-item-contant">
                    <ul>
                      <li><a href="#">Root Canal</a></li>
                    </ul>
                    <h2><a href="case-study-single">Root Canal Pain Relief Results Today</a></h2>
                  </div>
                  {/* Case Study Item Contant End */}
                </div>
                {/* Case Study Item End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Case Study Section End */}
        {/* Our Book Appointment Section Start */}
        <div className="our-book-appointment dark-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {/* Book Appointment Image Start */}
                <div className="book-appointment-image">
                  <figure>
                    <img src="images/book-appointment-image.jpg" alt="" />
                  </figure>
                </div>
                {/* Book Appointment Image End */}
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
            </div>
          </div>
        </div>
        {/* Our Book Appointment Section End */}
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
        {/* Our Blog Section Start */}
        <div className="our-blog">
          <div className="container">
            <div className="row section-row">
              <div className="col-xl-12">
                {/* Section Title Start */}
                <div className="section-title section-title-center">
                  <span className="section-sub-title wow fadeInUp">Our Blogs</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Dental Tips &amp; Care Insights</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Stay updated with expert dental advice and helpful treatment guides. Learn simple tips to keep your smile healthy and bright every day.</p>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                {/* Post Item Start */}
                <div className="post-item highlighted-post wow fadeInUp">
                  <div className="post-featured-image">
                    <a href="blog-single" data-cursor-text="View">
                      <figure>
                        <img src="images/post-1.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-tag">
                      <ul>
                        <li><a href="#">Orthodontic Care</a></li>
                      </ul>
                    </div>
                    <div className="post-item-content">
                      <h2><a href="blog-single">Achieve a Perfectly Aligned Smile with Advanced Orthodontic Treatments.</a></h2>
                    </div>
                    <div className="post-item-btn">
                      <a href="blog-single" className="readmore-btn">Read More</a>
                    </div>
                  </div>
                </div>
                {/* Post Item End */}
              </div>
              <div className="col-xl-6">
                {/* Posts Item List Start */}
                <div className="post-item-list">
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-2.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Oral Hygiene Tips</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Achieve perfectly for aligned smile</a></h2>
                        <p>Learn simple daily advice to keep your.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-3.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Kids Dental Care</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Daily Care for a Smile &amp; Oral Health</a></h2>
                        <p>Learn simple daily advice to keep your.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                </div>
                {/* Posts Item List End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Blog Section End */}
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
