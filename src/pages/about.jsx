import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_about() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">About <span>Us</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">about us</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
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
        {/* Our Approach Section Start */}
        <div className="our-approach light-section">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-xl-6">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Our Approach</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Caring Dentistry for Confident Healthy Smiles</h2>
                </div>
                {/* Section Title End */}
              </div>
              <div className="col-xl-6">
                {/* Section Content Btn Start */}
                <div className="section-content-btn">
                  {/* Section Title Content Start */}
                  <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                    <p>We follow a patient-focused approach that combines advanced dental technology, clinical expertise, and gentle care to deliver safe treatments.</p>
                  </div>
                  {/* Section Title Content End */}
                  {/* Section Button Start */}
                  <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                    <a href="contact" className="btn-default">Explore More</a>
                  </div>
                  {/* Section Button End */}
                </div>
                {/* Section Content Btn End */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                {/* Approach Item Start */}
                <div className="approach-item wow fadeInUp">
                  <div className="approach-item-header">
                    <div className="icon-box">
                      <img src="images/icon-approach-item-1.svg" alt="" />
                    </div>
                    <div className="approach-item-content">
                      <h3>Our Mission</h3>
                      <p>To deliver advance ethical comfortable oral health and patient confidence.</p>
                    </div>
                  </div>
                  <div className="approach-item-content-list">
                    <ul>
                      <li>High-quality treatment standards</li>
                      <li>Trusted patient relationships</li>
                      <li>Excellence in modern dentistry</li>
                    </ul>
                  </div>
                </div>
                {/* Approach Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Approach Item Start */}
                <div className="approach-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="approach-item-header">
                    <div className="icon-box">
                      <img src="images/icon-approach-item-2.svg" alt="" />
                    </div>
                    <div className="approach-item-content">
                      <h3>Our Vision</h3>
                      <p>To deliver advance ethical comfortable oral health and patient confidence.</p>
                    </div>
                  </div>
                  <div className="approach-item-content-list">
                    <ul>
                      <li>High-quality treatment standards</li>
                      <li>Trusted patient relationships</li>
                      <li>Excellence in modern dentistry</li>
                    </ul>
                  </div>
                </div>
                {/* Approach Item End */}
              </div>
              <div className="col-xl-4">
                {/* Approach Item Info Box Start */}
                <div className="approach-item-info-box wow fadeInUp" data-wow-delay="0.4s">
                  {/* Approach Item Image Start */}
                  <div className="approach-item-image">
                    <figure className="image-anime">
                      <img src="images/approach-item-image.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Approach Item Image End */}
                  {/* Approach Item Counter Box Start */}
                  <div className="approach-item-counter-box">
                    <h2>24*7</h2>
                    <h3>Emergency Dental Care</h3>
                    <p>Our team is always ready to assist you with urgent dental needs day or night.</p>
                  </div>
                  {/* Approach Item Counter Box End */}
                </div>
                {/* Approach Item Info Box End */}
              </div>
              <div className="col-lg-12">
                {/* Section Footer Text Start */}
                <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.6s">
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
        {/* Our Approach Section End */}
        {/* Our Impact Section Start */}
        <div className="our-impact">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-xl-6">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Our Impact</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Proven Results in Dental Care Statistics Report</h2>
                </div>
                {/* Section Title End */}
              </div>
              <div className="col-xl-6">
                {/* Section Content Btn Start */}
                <div className="section-content-btn">
                  {/* Section Title Content Start */}
                  <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                    <p>We are proud of the trust our patients place in us. Our statistics reflect commitment to quality treatment, advanced care, and long-term patient.</p>
                  </div>
                  {/* Section Title Content End */}
                  {/* Section Button Start */}
                  <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                    <a href="contact" className="btn-default">Explore More</a>
                  </div>
                  {/* Section Button End */}
                </div>
                {/* Section Content Btn End */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                {/* Our Impact Image Start */}
                <div className="our-impact-image">
                  <figure className="image-anime reveal">
                    <img src="images/our-impact-image.jpg" alt="" />
                  </figure>
                </div>
                {/* Our Impact Image End */}
              </div>
              <div className="col-lg-8">
                {/* Impact Chart Image Start */}
                <div className="impact-chart-image wow fadeInUp" data-wow-delay="0.2s">
                  <figure>
                    <img src="images/impact-chart-image.png" alt="" />
                  </figure>
                </div>
                {/* Impact Chart Image End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Impact Section End */}
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
