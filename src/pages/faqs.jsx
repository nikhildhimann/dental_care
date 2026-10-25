import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_faqs() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Frequently Asked <span>Questions</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">FAQ's</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Faqs Start */}
        <div className="page-faqs">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* Page Single Sidebar Start */}
                <div className="page-single-sidebar">
                  {/* Page Category List Start */}
                  <div className="page-category-list wow fadeInUp">
                    <ul>
                      <li><a href="#faq_1">General Questions</a></li>
                      <li><a href="#faq_2">Cosmetic Dentistry</a></li>
                      <li><a href="#faq_3">Orthodontic Treatment</a></li>
                      <li><a href="#faq_4">Root Canal Treatment</a></li>
                      <li><a href="#faq_5">Dental Implants</a></li>
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
                {/* Page FAQs Category Start */}
                <div className="page-faqs-category">
                  {/* Page Faq accordion start */}
                  <div className="page-faq-accordion" id="faq_1">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="wow text-anime-style-3" data-cursor="-opaque">General Questions</h2>
                    </div>
                    {/* Section Title End */}
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion our-faq-accordion" id="accordion">
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                        <h2 className="accordion-header" id="heading1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            How often should I visit the dentist?
                          </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse" role="region" aria-labelledby="heading1" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>It is generally recommended to visit the dentist every 6 months for routine checkups &amp; professional cleaning. However, depending on your individual oral health needs, your dentist may suggest more frequent visits.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
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
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                        <h2 className="accordion-header" id="heading3">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            What should I do in a dental emergency?
                          </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse show" role="region" aria-labelledby="heading3" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>It is generally recommended to visit the dentist every 6 months for routine checkups &amp; professional cleaning. However, depending on your individual oral health needs, your dentist may suggest more frequent visits.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
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
                      <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
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
                  {/* Page Faq accordion End */}
                  {/* Page Faq accordion start */}
                  <div className="page-faq-accordion" id="faq_2">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="wow text-anime-style-3" data-cursor="-opaque">Cosmetic Dentistry</h2>
                    </div>
                    {/* Section Title End */}
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion our-faq-accordion" id="accordion1">
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                        <h2 className="accordion-header" id="heading6">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                            What is teeth whitening?
                          </button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" role="region" aria-labelledby="heading6" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>Teeth whitening is a cosmetic procedure that removes stains and discoloration from teeth. It helps make your smile brighter and more attractive using safe professional treatments.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                        <h2 className="accordion-header" id="heading7">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            Are veneers permanent?
                          </button>
                        </h2>
                        <div id="collapse7" className="accordion-collapse collapse" role="region" aria-labelledby="heading7" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>Teeth whitening is a cosmetic procedure that removes stains and discoloration from teeth. It helps make your smile brighter and more attractive using safe professional treatments.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                        <h2 className="accordion-header" id="heading8">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            Can I improve my smile shape?
                          </button>
                        </h2>
                        <div id="collapse8" className="accordion-collapse collapse show" role="region" aria-labelledby="heading8" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>Teeth whitening is a cosmetic procedure that removes stains and discoloration from teeth. It helps make your smile brighter and more attractive using safe professional treatments.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                        <h2 className="accordion-header" id="heading9">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                            Is whitening safe for teeth?
                          </button>
                        </h2>
                        <div id="collapse9" className="accordion-collapse collapse" role="region" aria-labelledby="heading9" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>Teeth whitening is a cosmetic procedure that removes stains and discoloration from teeth. It helps make your smile brighter and more attractive using safe professional treatments.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                        <h2 className="accordion-header" id="heading10">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                            How long does cosmetic treatment take?
                          </button>
                        </h2>
                        <div id="collapse10" className="accordion-collapse collapse" role="region" aria-labelledby="heading10" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>Teeth whitening is a cosmetic procedure that removes stains and discoloration from teeth. It helps make your smile brighter and more attractive using safe professional treatments.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                    </div>
                    {/* FAQ Accordion End */}
                  </div>
                  {/* Page Faq accordion End */}
                  {/* Page Faq accordion start */}
                  <div className="page-faq-accordion" id="faq_3">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="wow text-anime-style-3" data-cursor="-opaque">Orthodontic Treatment</h2>
                    </div>
                    {/* Section Title End */}
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion our-faq-accordion" id="accordion2">
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                        <h2 className="accordion-header" id="heading11">
                          <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                            Who needs braces or aligners?
                          </button>
                        </h2>
                        <div id="collapse11" className="accordion-collapse collapse" role="region" aria-labelledby="heading11" data-bs-parent="#accordion2">
                          <div className="accordion-body">
                            <p>Orthodontic treatment is recommended for people with crooked, crowded, or misaligned teeth, or those with bite issues affecting function and appearance.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                        <h2 className="accordion-header" id="heading12">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                            How long does treatment take?
                          </button>
                        </h2>
                        <div id="collapse12" className="accordion-collapse collapse" role="region" aria-labelledby="heading12" data-bs-parent="#accordion2">
                          <div className="accordion-body">
                            <p>Orthodontic treatment is recommended for people with crooked, crowded, or misaligned teeth, or those with bite issues affecting function and appearance.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                        <h2 className="accordion-header" id="heading13">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                            Are braces painful?
                          </button>
                        </h2>
                        <div id="collapse13" className="accordion-collapse collapse show" role="region" aria-labelledby="heading13" data-bs-parent="#accordion2">
                          <div className="accordion-body">
                            <p>Orthodontic treatment is recommended for people with crooked, crowded, or misaligned teeth, or those with bite issues affecting function and appearance.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                        <h2 className="accordion-header" id="heading14">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                            Can adults get braces?
                          </button>
                        </h2>
                        <div id="collapse14" className="accordion-collapse collapse" role="region" aria-labelledby="heading14" data-bs-parent="#accordion2">
                          <div className="accordion-body">
                            <p>Orthodontic treatment is recommended for people with crooked, crowded, or misaligned teeth, or those with bite issues affecting function and appearance.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                        <h2 className="accordion-header" id="heading15">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                            What are clear aligners?
                          </button>
                        </h2>
                        <div id="collapse15" className="accordion-collapse collapse" role="region" aria-labelledby="heading15" data-bs-parent="#accordion2">
                          <div className="accordion-body">
                            <p>Orthodontic treatment is recommended for people with crooked, crowded, or misaligned teeth, or those with bite issues affecting function and appearance.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                    </div>
                    {/* FAQ Accordion End */}
                  </div>
                  {/* Page Faq accordion End */}
                  {/* Page Faq accordion start */}
                  <div className="page-faq-accordion" id="faq_4">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="wow text-anime-style-3" data-cursor="-opaque">Root Canal Treatment</h2>
                    </div>
                    {/* Section Title End */}
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion our-faq-accordion" id="accordion3">
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                        <h2 className="accordion-header" id="heading16">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                            Why is root canal treatment needed?
                          </button>
                        </h2>
                        <div id="collapse16" className="accordion-collapse collapse" role="region" aria-labelledby="heading16" data-bs-parent="#accordion3">
                          <div className="accordion-body">
                            <p>Root canal treatment is needed when the tooth pulp becomes infected or damaged. It helps save the natural tooth instead of extracting it.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                        <h2 className="accordion-header" id="heading17">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                            Is root canal painful?
                          </button>
                        </h2>
                        <div id="collapse17" className="accordion-collapse collapse" role="region" aria-labelledby="heading17" data-bs-parent="#accordion3">
                          <div className="accordion-body">
                            <p>Root canal treatment is needed when the tooth pulp becomes infected or damaged. It helps save the natural tooth instead of extracting it.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                        <h2 className="accordion-header" id="heading18">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                            How many visits are required?
                          </button>
                        </h2>
                        <div id="collapse18" className="accordion-collapse collapse show" role="region" aria-labelledby="heading18" data-bs-parent="#accordion3">
                          <div className="accordion-body">
                            <p>Root canal treatment is needed when the tooth pulp becomes infected or damaged. It helps save the natural tooth instead of extracting it.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                        <h2 className="accordion-header" id="heading19">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                            What happens after treatment?
                          </button>
                        </h2>
                        <div id="collapse19" className="accordion-collapse collapse" role="region" aria-labelledby="heading19" data-bs-parent="#accordion3">
                          <div className="accordion-body">
                            <p>Root canal treatment is needed when the tooth pulp becomes infected or damaged. It helps save the natural tooth instead of extracting it.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                        <h2 className="accordion-header" id="heading20">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                            Can the tooth last after root canal?
                          </button>
                        </h2>
                        <div id="collapse20" className="accordion-collapse collapse" role="region" aria-labelledby="heading20" data-bs-parent="#accordion3">
                          <div className="accordion-body">
                            <p>Root canal treatment is needed when the tooth pulp becomes infected or damaged. It helps save the natural tooth instead of extracting it.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                    </div>
                    {/* FAQ Accordion End */}
                  </div>
                  {/* Page Faq accordion End */}
                  {/* Page Faq accordion start */}
                  <div className="page-faq-accordion" id="faq_5">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="wow text-anime-style-3" data-cursor="-opaque">Dental Implants</h2>
                    </div>
                    {/* Section Title End */}
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion our-faq-accordion" id="accordion4">
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                        <h2 className="accordion-header" id="heading21">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                            What are dental implants?
                          </button>
                        </h2>
                        <div id="collapse21" className="accordion-collapse collapse" role="region" aria-labelledby="heading21" data-bs-parent="#accordion4">
                          <div className="accordion-body">
                            <p>Dental implants are artificial tooth roots made of titanium that are placed into the jawbone to support replacement teeth. With good oral hygiene and regular dental visits, dental implants can last 15 years or even a lifetime.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                        <h2 className="accordion-header" id="heading22">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                            Are implants safe?
                          </button>
                        </h2>
                        <div id="collapse22" className="accordion-collapse collapse" role="region" aria-labelledby="heading22" data-bs-parent="#accordion4">
                          <div className="accordion-body">
                            <p>Dental implants are artificial tooth roots made of titanium that are placed into the jawbone to support replacement teeth. With good oral hygiene and regular dental visits, dental implants can last 15 years or even a lifetime.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                        <h2 className="accordion-header" id="heading23">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
                            How long do they last?
                          </button>
                        </h2>
                        <div id="collapse23" className="accordion-collapse collapse show" role="region" aria-labelledby="heading23" data-bs-parent="#accordion4">
                          <div className="accordion-body">
                            <p>Dental implants are artificial tooth roots made of titanium that are placed into the jawbone to support replacement teeth. With good oral hygiene and regular dental visits, dental implants can last 15 years or even a lifetime.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                        <h2 className="accordion-header" id="heading24">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
                            Is implant surgery painful?
                          </button>
                        </h2>
                        <div id="collapse24" className="accordion-collapse collapse" role="region" aria-labelledby="heading24" data-bs-parent="#accordion4">
                          <div className="accordion-body">
                            <p>Dental implants are artificial tooth roots made of titanium that are placed into the jawbone to support replacement teeth. With good oral hygiene and regular dental visits, dental implants can last 15 years or even a lifetime.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                        <h2 className="accordion-header" id="heading25">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                            Who can get implants?
                          </button>
                        </h2>
                        <div id="collapse25" className="accordion-collapse collapse" role="region" aria-labelledby="heading25" data-bs-parent="#accordion4">
                          <div className="accordion-body">
                            <p>Dental implants are artificial tooth roots made of titanium that are placed into the jawbone to support replacement teeth. With good oral hygiene and regular dental visits, dental implants can last 15 years or even a lifetime.</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                    </div>
                    {/* FAQ Accordion End */}
                  </div>
                  {/* Page Faq accordion End */}
                </div> 
                {/* Page FAQs List End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Faqs End */}
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
