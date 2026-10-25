import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_404() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Page Not <span>Found</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">404 Error Page</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* error Page start */}
        <div className="error-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="error-page-image wow fadeInUp">
                  <img src="images/404-error-img.png" alt="" />
                </div>
                <div className="error-page-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Oops! page not found</h2>
                  </div>
                  <div className="error-page-content-body">
                    <p className="wow fadeInUp" data-wow-delay="0.2s">The page you are looking for does not exist.</p>
                    <a className="btn-default wow fadeInUp" data-wow-delay="0.4s" href="/">Back to Homepage</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* error Page end */}
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
