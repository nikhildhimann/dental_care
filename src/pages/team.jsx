import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_team() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Our <span>team</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Our Team</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Team Start */}
        <div className="page-team">
          <div className="container">
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
              <div className="col-xl-4 col-md-6">
                {/* Team Item Start */}
                <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="team-item-image">
                    <a href="team-single" data-cursor-text="View">
                      <figure>
                        <img src="images/team-image-4.jpg" alt="" />
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
                    <h2><a href="team-single">Dr. Sophia Bennett</a></h2>
                    <p>Pediatric Dentist</p>
                  </div>
                </div>
                {/* Team Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Team Item Start */}
                <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="team-item-image">
                    <a href="team-single" data-cursor-text="View">
                      <figure>
                        <img src="images/team-image-5.jpg" alt="" />
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
                    <h2><a href="team-single">Dr. Ethan Mitchell</a></h2>
                    <p>Oral Surgery Specialist</p>
                  </div>
                </div>
                {/* Team Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Team Item Start */}
                <div className="team-item wow fadeInUp" data-wow-delay="1s">
                  <div className="team-item-image">
                    <a href="team-single" data-cursor-text="View">
                      <figure>
                        <img src="images/team-image-6.jpg" alt="" />
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
                    <h2><a href="team-single">Dr. Amelia Roberts</a></h2>
                    <p>Lead General Dentist</p>
                  </div>
                </div>
                {/* Team Item End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Team End */}
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
