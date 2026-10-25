import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_service_single() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">General Dental <span>Care</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item"><a href="services">services</a></li>
                      <li className="breadcrumb-item active" aria-current="page">General Dental Care</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Service Single Start */}
        <div className="page-service-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* Page Single Sidebar Start */}
                <div className="page-single-sidebar">
                  {/* Page Category List Start */}
                  <div className="page-category-list wow fadeInUp">
                    <h2 className="page-category-list-title">Explore Our Services</h2>
                    <ul>
                      <li><a href="#">Cosmetic Smile Care</a></li>
                      <li><a href="#">Orthodontic Alignment Care</a></li>
                      <li><a href="#">Tooth Extraction</a></li>
                      <li><a href="#">Gentle Smile Care</a></li>
                      <li><a href="#">Teeth Whitening</a></li>
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
                {/* Service Single Content Start */}
                <div className="service-single-content">
                  {/* Page Single image Start */}
                  <div className="page-single-image">
                    <figure className="image-anime reveal">
                      <img src="images/service-image-1.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Page Single image End */}
                  {/* Service Entry Start */}
                  <div className="service-entry">
                    <p className="wow fadeInUp">General Dental Care is a professional dental procedure designed to remove plaque, tartar, and surface stains that regular brushing and flossing cannot eliminate. It helps maintain healthy teeth and gums while preventing common dental problems such as cavities, bad breath, and gum disease.</p>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Our advanced cleaning process ensures a deep yet gentle cleaning experience, leaving your mouth feeling fresh, smooth, and healthy. Regular enhances the natural brightness of your smile.</p>
                    {/* Service Why Choose Box Start */}
                    <div className="service-why-choose-box">
                      <h2 className="text-anime-style-3">Why Choose General Dental Care</h2>
                      <p className="wow fadeInUp">We use modern dental tools and gentle techniques to ensure a comfortable cleaning experience for every patient. Our focus is on preventive care, helping you maintain a years to come.</p>
                      {/* Service Why Choose Image Content Start */}
                      <div className="service-why-choose-image-content">
                        {/* Service Why Choose Image Start */}
                        <div className="service-why-choose-image">
                          <figure className="image-anime reveal">
                            <img src="images/service-why-choose-image.jpg" alt="" />
                          </figure>
                        </div>
                        {/* Service Why Choose Image End */}
                        {/* Service Why Choose Content Box Start */}
                        <div className="service-why-choose-content-box">
                          {/* Service Why Choose Item Start */}
                          <div className="service-why-choose-item wow fadeInUp">
                            <div className="service-why-choose-item-content">
                              <h3>Patient-Centered Approach</h3>
                              <p>Every treatment is customized based on individual needs, comfort.</p>
                            </div>
                            <div className="service-why-choose-item-content-list">
                              <ul>
                                <li>Experienced dental professional</li>
                              </ul>
                            </div>
                          </div>
                          {/* Service Why Choose Item End */}
                          {/* Service Why Choose Item Start */}
                          <div className="service-why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-why-choose-item-content">
                              <h3>Strict Hygiene Standards</h3>
                              <p>Every treatment is customized based on individual needs, comfort.</p>
                            </div>
                            <div className="service-why-choose-item-content-list">
                              <ul>
                                <li>Experienced dental professional</li>
                              </ul>
                            </div>
                          </div>
                          {/* Service Why Choose Item End */}
                        </div>
                        {/* Service Why Choose Content Box End */}
                      </div>
                      {/* Service Why Choose Image Content End */}
                    </div>
                    {/* Service Why Choose Box End */}
                    {/* Service Benefits Box Start */}
                    <div className="service-benefits-box">
                      <h2 className="text-anime-style-3">Benefits of General Dental Care</h2>
                      <p className="wow fadeInUp">Professional General Dental Care helps maintain optimal oral health by removing plaque, tartar, and stains that cannot be eliminated through regular brushing alone.</p>
                      {/* Service Benefits List Start */}
                      <div className="service-benefits-list wow fadeInUp" data-wow-delay="0.2s">
                        <ul>
                          <li>Removes plaque and tartar buildup</li>
                          <li>Prevents gum disease &amp; tooth decay</li>
                          <li>Freshens breath &amp; improves hygiene</li>
                          <li>Keeps gums healthy and strong</li>
                        </ul>
                      </div>
                      {/* Service Benefits List End */}
                      {/* Service Benefits Image Start */}
                      <div className="service-benefits-image">
                        <figure className="image-anime reveal">
                          <img src="images/service-benefits-image.jpg" alt="" />
                        </figure>
                      </div>
                      {/* Service Benefits Image End */}
                    </div>
                    {/* Service Benefits Box End */}
                    {/* Service Entry Info Box Start */}
                    <div className="service-entry-info-box">
                      <h2 className="text-anime-style-3">Modern Equipment &amp; Technology</h2>
                      <p className="wow fadeInUp">We use advanced dental technology to ensure safe, precise, and comfortable General Dental Care with the best possible results for every patient.</p>
                      {/* Service Entry Info Item List Start */}
                      <div className="service-entry-info-item-list">
                        {/* Service Entry Info Item Start */}
                        <div className="service-entry-info-item wow fadeInUp">
                          <div className="icon-box">
                            <img src="images/icon-service-entry-info-1.svg" alt="" />
                          </div>
                          <div className="service-entry-info-item-content">
                            <h3>Scaling Technology</h3>
                            <p>Cutting edge technology for Dental Cleaning Care</p>
                          </div>
                        </div>
                        {/* Service Entry Info Item End */}
                        {/* Service Entry Info Item Start */}
                        <div className="service-entry-info-item wow fadeInUp" data-wow-delay="0.2s">
                          <div className="icon-box">
                            <img src="images/icon-service-entry-info-2.svg" alt="" />
                          </div>
                          <div className="service-entry-info-item-content">
                            <h3>Dental Examination</h3>
                            <p>Cutting edge technology for Dental Cleaning Care</p>
                          </div>
                        </div>
                        {/* Service Entry Info Item End */}
                        {/* Service Entry Info Item Start */}
                        <div className="service-entry-info-item wow fadeInUp" data-wow-delay="0.4s">
                          <div className="icon-box">
                            <img src="images/icon-service-entry-info-3.svg" alt="" />
                          </div>
                          <div className="service-entry-info-item-content">
                            <h3>Sterilized Systems</h3>
                            <p>Cutting edge technology for Dental Cleaning Care</p>
                          </div>
                        </div>
                        {/* Service Entry Info Item End */}
                      </div>
                      {/* Service Entry Info Item List End */}
                      <p className="wow fadeInUp">Our clinic uses advanced dental cleaning technology to ensure every procedure is safe, efficient, and comfortable. With ultrasonic scaling and modern polishing equipment.</p>
                    </div>
                    {/* Service Entry Info Box End */}
                  </div>
                  {/* Service Entry End */}
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
                {/* Service Single Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Service Single End */}
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
