import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";
export default function Page_team_single() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Dr. Michael <span>Carter</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item"><a href="team">team</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Dr. Michael Carter</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Team Single Start */}
        <div className="page-team-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Page Team Single Box Start */}
                <div className="page-team-single-box">
                  {/* Team Member About Start */}
                  <div className="team-member-about">
                    {/* Team Single Image Start */}
                    <div className="team-single-image">
                      <figure className="image-anime reveal">
                        <img src="images/team-image-1.jpg" alt="" />
                      </figure>
                    </div>
                    {/* Team Single Image End */}
                    {/* Team About Content Start */}
                    <div className="team-about-content">
                      {/* Section Title Start */}
                      <div className="section-title">
                        <h2 className="text-anime-style-3" data-cursor="-opaque">About me</h2>
                        <p className="wow fadeInUp">Dr. Michael Carter is a highly experienced Chief Dentist and Implant Specialist dedicated to delivering advanced, precise, and patient-focused dental care. With years of expertise in restorative and implant dentistry.</p>
                      </div>
                      {/* Section Title End */}
                      {/* Team Contact List Box Start */}
                      <div className="team-contact-list-box">
                        {/* Team Contact Item Start */}
                        <div className="team-contact-item wow fadeInUp">
                          <div className="icon-box">
                            <img src="images/icon-phone-primary.svg" alt="" />
                          </div>
                          <div className="team-contact-item-content">
                            <h3>Phone Number</h3>
                            <p>+91 34243 - 2342</p>
                          </div>
                        </div>
                        {/* Team Contact Item End */}
                        {/* Team Contact Item Start */}
                        <div className="team-contact-item wow fadeInUp" data-wow-delay="0.2s">
                          <div className="icon-box">
                            <img src="images/icon-mail-primary.svg" alt="" />
                          </div>
                          <div className="team-contact-item-content">
                            <h3>Email Address</h3>
                            <p>www.info@domainname.com</p>
                          </div>
                        </div>
                        {/* Team Contact Item End */}
                        {/* Team Contact Item Start */}
                        <div className="team-contact-item wow fadeInUp" data-wow-delay="0.4s">
                          <div className="icon-box">
                            <img src="images/icon-location-primary.svg" alt="" />
                          </div>
                          <div className="team-contact-item-content">
                            <h3>Work Location</h3>
                            <p>Dental Care Clinic Main Branch</p>
                          </div>
                        </div>
                        {/* Team Contact Item End */}
                        {/* Team Contact Item Start */}
                        <div className="team-contact-item wow fadeInUp" data-wow-delay="0.6s">
                          <div className="icon-box">
                            <img src="images/icon-experience-primary.svg" alt="" />
                          </div>
                          <div className="team-contact-item-content">
                            <h3>Experience</h3>
                            <p>15+ Years in Chief Dentistry</p>
                          </div>
                        </div>
                        {/* Team Contact Item End */}
                      </div>
                      {/* Team Contact List Box End */}
                      {/* Member Social List Start */}
                      <div className="member-social-list wow fadeInUp" data-wow-delay="0.8s">
                        <h3>Share :</h3>
                        <ul>
                          <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                          <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                          <li><a href="#"><i className="fa-brands fa-dribbble" /></a></li>
                          <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                        </ul>
                      </div>
                      {/* Member Social List End */}
                    </div>
                    {/* Team About Content End */}
                  </div>
                  {/* Team Member About End */}
                  {/* Team Member Personal Info Box Box Start */}
                  <div className="team-member-personal-info-box">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">Personal Details</h2>
                      <p className="wow fadeInUp">Dr. Michael Carter is the Chief Dentist and Implant Specialist with over 15 years of experience in advanced dentistry. He holds qualifications in BDS and MDS (Oral Implantology) and specializes in dental implants, restorative dentistry, smile design, and oral rehabilitation. He is known for his precise clinical skills, patient-focused approach, and commitment to delivering long-lasting results.</p>
                    </div>
                    {/* Section Title End */}
                    {/* Team Member Info Item Start */}
                    <div className="team-member-info-item-list">
                      {/* Team Member Memories Start */}
                      <div className="team-member-info-item wow fadeInUp">
                        <div className="icon-box">
                          <img src="images/icon-team-member-info-item-1.svg" alt="" />
                        </div>
                        <div className="team-member-info-item-content">
                          <h3>Cosmetic Dentistry</h3>
                          <p>Improves smile with whitening, shaping, and treatments.</p>
                        </div>
                      </div>
                      {/* Team Member Memories End */}
                      {/* Team Member Memories Start */}
                      <div className="team-member-info-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon-box">
                          <img src="images/icon-team-member-info-item-2.svg" alt="" />
                        </div>
                        <div className="team-member-info-item-content">
                          <h3>Precision Oral Surgery</h3>
                          <p>Improves smile with whitening, shaping, and treatments.</p>
                        </div>
                      </div>
                      {/* Team Member Memories End */}
                      {/* Team Member Memories Start */}
                      <div className="team-member-info-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="icon-box">
                          <img src="images/icon-team-member-info-item-3.svg" alt="" />
                        </div>
                        <div className="team-member-info-item-content">
                          <h3>Implant Bone Support</h3>
                          <p>Improves smile with whitening, shaping, and treatments.</p>
                        </div>
                      </div>
                      {/* Team Member Memories End */}
                      {/* Team Member Memories Start */}
                      <div className="team-member-info-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="icon-box">
                          <img src="images/icon-team-member-info-item-4.svg" alt="" />
                        </div>
                        <div className="team-member-info-item-content">
                          <h3>Digital Smile Design</h3>
                          <p>Improves smile with whitening, shaping, and treatments.</p>
                        </div>
                      </div>
                      {/* Team Member Memories End */}
                    </div>
                    {/* Team Member Info Item End */}
                    {/* Team Member Info Footer Start */}
                    <div className="team-member-info-footer wow fadeInUp">
                      <p>He holds qualifications in BDS and MDS (Oral Implantology) and specializes in dental implants, restorative dentistry, smile design, and oral rehabilitation. He is known for his precise clinical skills, patient-focused approach, and commitment to delivering long-lasting results.</p>
                    </div>
                    {/* Team Member Info Footer End */}
                  </div>
                  {/* Team Member Personal Info Box Box End */}
                  {/* Team Skill Form Section Start */}
                  <div className="team-skills-form">
                    {/* Team Member Experts Start */}
                    <div className="team-member-experts">
                      {/* Section Title Start */}
                      <div className="section-title">
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Professional Highlights</h2>
                        <p className="wow fadeInUp">His expertise is reflected in consistently high treatment success rates, strong patient satisfaction, and of successful dental over the years.</p>
                      </div>
                      {/* Section Title End */}
                      {/* Team Expert Skills List Start */}
                      <div className="team-expert-skills-list">
                        {/* Skills Progress Bar Start */}
                        <div className="skills-progress-bar">
                          {/* Skill Item Start */}
                          <div className="skillbar" data-percent="95%">
                            <div className="skill-data">
                              <div className="skill-title">Implant Success Rate</div>
                              <div className="skill-no">95%</div>
                            </div>
                            <div className="skill-progress">
                              <div className="count-bar" />
                            </div>
                          </div>
                          {/* Skill Item End */}
                        </div>
                        {/* Skills Progress Bar End */}
                        {/* Skills Progress Bar Start */}
                        <div className="skills-progress-bar">
                          {/* Skill Item Start */}
                          <div className="skillbar" data-percent="92%">
                            <div className="skill-data">
                              <div className="skill-title">Patient Satisfaction</div>
                              <div className="skill-no">92%</div>
                            </div>
                            <div className="skill-progress">
                              <div className="count-bar" />
                            </div>
                          </div>
                          {/* Skill Item End */}
                        </div>
                        {/* Skills Progress Bar End */}
                        {/* Skills Progress Bar Start */}
                        <div className="skills-progress-bar">
                          {/* Skill Item Start */}
                          <div className="skillbar" data-percent="88%">
                            <div className="skill-data">
                              <div className="skill-title">Successful Treatments</div>
                              <div className="skill-no">88%</div>
                            </div>
                            <div className="skill-progress">
                              <div className="count-bar" />
                            </div>
                          </div>
                          {/* Skill Item End */}
                        </div>
                        {/* Skills Progress Bar End */}
                      </div>
                      {/* Team Expert Skills List End */}
                    </div>
                    {/* Team Member Experts End */}
                    {/* Contact Us Form Start */}
                    <div className="contact-us-form team-content-form">
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
                  {/* Team Skill Form Section End */}    
                </div>
                {/* Page Team Single Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Team Single End */}
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
