import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_case_study_single() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Dental Implant <span>Restoration Results</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item"><a href="case-study">Case study</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Dental Implant Restoration Results</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Case Study Single Start */}
        <div className="page-case-study-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* Page Single Sidebar Start */}
                <div className="page-single-sidebar">
                  {/* Page Category List Start */}
                  <div className="page-category-list case-study-category-list wow fadeInUp">
                    <h2 className="page-category-list-title">Case Study Details</h2>
                    <ul>
                      <li>Category: <span>Dental Implants</span></li>
                      <li>Gender: <span>Female</span></li>
                      <li>Client: <span>John Smith</span></li>
                      <li>Age: <span>35 Year Old</span></li>
                      <li>Cost: <span>$700.00</span></li>
                    </ul>
                  </div>
                  {/* Page Category List End */}
                  {/* Sidebar CTA Box Start */}
                  <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                    {/* Sidebar CTA Image Start */}
                    <div className="sidebar-cta-image">
                      <figure>
                        <img src="images/sidebar-cta-image.jpg" alt="" />
                      </figure>
                    </div>
                    {/* Sidebar CTA Image End */}
                    {/* Sidebar CTA Contact Item List Start */}
                    <div className="sidebar-cta-contact-item-list">
                      {/* Sidebar CTA Contact Item Start */}
                      <div className="sidebar-cta-contact-item">
                        <div className="icon-box">
                          <img src="images/icon-phone-primary.svg" alt="" />
                        </div>
                        <div className="sidebar-cta-contact-item-content">
                          <p>Contact Us!</p>
                          <h2><a href={`tel:${siteConfig.emergencyPhoneRaw || siteConfig.phoneRaw}`}>{siteConfig.emergencyPhone || siteConfig.phone}</a></h2>
                        </div>
                      </div>
                      {/* Sidebar CTA Contact Item End */}
                      {/* Sidebar CTA Contact Item Start */}
                      <div className="sidebar-cta-contact-item">
                        <div className="icon-box">
                          <img src="images/icon-mail-primary.svg" alt="" />
                        </div>
                        <div className="sidebar-cta-contact-item-content">
                          <p>E-mail Us</p>
                          <h2><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></h2>
                        </div>
                      </div>
                      {/* Sidebar CTA Contact Item End */}
                    </div>
                    {/* Sidebar CTA Contact Item List End */}
                  </div>
                  {/* Sidebar CTA Box End */}
                </div>
                {/* Page Single Sidebar End */}
              </div>
              <div className="col-lg-8">
                {/* Case Study Single Content Start */}
                <div className="case-study-single-content">
                  {/* Page Single image Start */}
                  <div className="page-single-image">
                    <figure className="image-anime reveal">
                      <img src="images/case-study-image-1.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Page Single image End */}
                  {/* Case Study Entry Start */}
                  <div className="case-study-entry">
                    <p className="wow fadeInUp">Our dental implant restoration cases showcase successful treatments that restore missing teeth with natural-looking, long-lasting solutions. Each case highlights improved functionality, aesthetics, and patient confidence through advanced implant dentistry.</p>
                    {/* Case Study Result Box Start */}
                    <div className="case-study-result-box">
                      <h2 className="text-anime-style-3">Dental Implant Results</h2>
                      <p className="wow fadeInUp">Our dental implant treatments are designed to deliver long-lasting, functional, and natural-looking results. Each case is carefully planned to ensure optimal stability, aesthetics.</p>
                      {/* Case Study Result Item List Start */}
                      <div className="case-study-result-item-list">
                        {/* Case Study Result Item Start */}
                        <div className="case-study-result-item wow fadeInUp" data-wow-delay="0.2s">
                          <div className="icon-box">
                            <img src="images/icon-case-study-result-item-1.svg" alt="" />
                          </div>
                          <div className="case-study-result-item-content">
                            <h3>Natural-Looking Smile Restoration</h3>
                            <p>Dental implants are designed to closely match your natural teeth in shape, size, and color, ensuring a seamless and aesthetically pleasing smile that looks completely real.</p>
                          </div>
                        </div>
                        {/* Case Study Result Item End */}
                        {/* Case Study Result Item Start */}
                        <div className="case-study-result-item wow fadeInUp" data-wow-delay="0.4s">
                          <div className="icon-box">
                            <img src="images/icon-case-study-result-item-2.svg" alt="" />
                          </div>
                          <div className="case-study-result-item-content">
                            <h3>Improved Chewing Function</h3>
                            <p>Implants restore full biting and chewing ability, allowing patients to enjoy their favorite comfortably without pain, slipping, or restrictions.</p>
                          </div>
                        </div>
                        {/* Case Study Result Item End */}
                      </div>
                      {/* Case Study Result Item List End */}
                      {/* Case Study Result Images Box Start */}
                      <div className="case-study-result-images-box">
                        {/* Case Study Result Image Start */}
                        <div className="case-study-result-image">
                          <figure className="image-anime reveal">
                            <img src="images/case-study-result-image-1.jpg" alt="" />
                          </figure>
                        </div>
                        {/* Case Study Result Image End */}
                        {/* Case Study Result Image Start */}
                        <div className="case-study-result-image">
                          <figure className="image-anime reveal">
                            <img src="images/case-study-result-image-2.jpg" alt="" />
                          </figure>
                        </div>
                        {/* Case Study Result Image End */}
                      </div>
                      {/* Case Study Result Images Box End */}
                    </div>
                    {/* Case Study Result Box End */}
                    {/* Case Study Case Matter Box Start */}
                    <div className="case-study-case-matter-box">
                      <h2 className="text-anime-style-3">Why These Cases Matter</h2>
                      <p className="wow fadeInUp">Each case reflects careful planning, precise execution, and personalized care, ensuring that every patient receives a stable, comfortable, and long-lasting solution.</p>
                      {/* Case Study Case Matter Item List Start */}
                      <div className="case-study-case-matter-item-list wow fadeInUp" data-wow-delay="0.2s">
                        {/* Case Study Case Matter Item Start */}
                        <div className="case-study-case-matter-item">
                          <p>“With advanced implant dentistry, patients can enjoy long-lasting stability, natural aesthetics, and a renewed sense of self in everyday life.”</p>
                          <span>~ Sarah Patel, Canada</span>
                        </div>
                        {/* Case Study Case Matter Item End */}
                      </div>
                      {/* Case Study Case Matter Item List End */}
                    </div>
                    {/* Case Study Case Matter Box End */}
                    {/* Case Study Excellence Box Start */}
                    <div className="case-study-excellence-box">
                      <h2 className="text-anime-style-3">Dental Excellence Focus</h2>
                      <p className="wow fadeInUp">We focus on delivering precise, patient-centered dental implant treatments that ensure long-term success, comfort, and natural-looking results. Every case is carefully planned using advanced technology.</p>
                      {/* Case Study Excellence Counter Boxes Start */}
                      <div className="case-study-excellence-counter-boxes">
                        {/* Case Study Excellence Counter Item Start */}
                        <div className="case-study-excellence-counter-item">
                          <div className="case-study-excellence-item-header">
                            <div className="case-study-excellence-counter-no">
                              <h2><span className="counter">100</span>%</h2>
                            </div>
                            <div className="icon-box">
                              <img src="images/icon-case-study-excellence-item-1.svg" alt="" />
                            </div>
                          </div>
                          <div className="case-study-excellence-item-list">
                            <ul>
                              <li>Advance dental technology care</li>
                            </ul>
                          </div>
                        </div>
                        {/* Case Study Excellence Counter Item End */}
                        {/* Case Study Excellence Counter Item Start */}
                        <div className="case-study-excellence-counter-item">
                          <div className="case-study-excellence-item-header">
                            <div className="case-study-excellence-counter-no">
                              <h2><span className="counter">50</span>+</h2>
                            </div>
                            <div className="icon-box">
                              <img src="images/icon-case-study-excellence-item-2.svg" alt="" />
                            </div>
                          </div>
                          <div className="case-study-excellence-item-list">
                            <ul>
                              <li>Advanced Procedures Monthly</li>
                            </ul>
                          </div>
                        </div>
                        {/* Case Study Excellence Counter Item End */}
                      </div>
                      {/* Case Study Excellence Counter Boxes End */}
                      {/* Case Study Excellence Image Start */}
                      <div className="case-study-excellence-image">
                        <figure className="image-anime reveal">
                          <img src="images/case-study-excellence-image.jpg" alt="" />
                        </figure>
                      </div>
                      {/* Case Study Excellence Image End */}
                    </div>
                    {/* Case Study Excellence Box End */}
                  </div>
                  {/* Case Study Entry End */}
                  {/* Page Single FAQs Start */}
                  <div className="page-single-faqs">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">Frequently Asked Questions</h2>
                    </div>
                    {/* Section Title End */}
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
                  {/* Page Single FAQs End */}
                </div>
                {/* Case Study Single Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Case Study Single End */}
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
