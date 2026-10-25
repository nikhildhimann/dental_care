import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_case_study() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Case <span>Study</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Case Study</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Case Study Start */}
        <div className="page-case-study">
          <div className="container">
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
              <div className="col-xl-4 col-md-6">
                {/* Case Study Item Start */}
                <div className="case-study-item wow fadeInUp" data-wow-delay="0.6s">
                  {/* Case Study Item Image Box Start */}
                  <div className="case-study-item-image-box">
                    <div className="case-study-item-image">
                      <a href="case-study-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/case-study-image-4.jpg" alt="" />
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
                    <h2><a href="case-study-single">Successful Teeth Alignment Transformation</a></h2>
                  </div>
                  {/* Case Study Item Contant End */}
                </div>
                {/* Case Study Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Case Study Item Start */}
                <div className="case-study-item wow fadeInUp" data-wow-delay="0.8s">
                  {/* Case Study Item Image Box Start */}
                  <div className="case-study-item-image-box">
                    <div className="case-study-item-image">
                      <a href="case-study-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/case-study-image-5.jpg" alt="" />
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
                      <li><a href="#">Preventive Care</a></li>
                    </ul>
                    <h2><a href="case-study-single">Long-Term Oral Health Improvement</a></h2>
                  </div>
                  {/* Case Study Item Contant End */}
                </div>
                {/* Case Study Item End */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* Case Study Item Start */}
                <div className="case-study-item wow fadeInUp" data-wow-delay="1s">
                  {/* Case Study Item Image Box Start */}
                  <div className="case-study-item-image-box">
                    <div className="case-study-item-image">
                      <a href="case-study-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/case-study-image-6.jpg" alt="" />
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
                      <li><a href="#">Cosmetic Dentistry</a></li>
                    </ul>
                    <h2><a href="case-study-single">Complete Smile Makeover With Veneers</a></h2>
                  </div>
                  {/* Case Study Item Contant End */}
                </div>
                {/* Case Study Item End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Case Study End */}
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
