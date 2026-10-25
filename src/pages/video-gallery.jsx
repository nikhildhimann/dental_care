import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_video_gallery() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Video <span>gallery</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Video gallery</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Video Gallery Start */}
        <div className="page-video-gallery">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.2s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-5.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.4s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.6s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.8s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-4.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="1s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-9.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.2s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-6.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.4s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-8.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Video Gallery start */}
                <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.6s">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <figure>
                      <img src="images/gallery-7.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Gallery end */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Video Gallery End */}
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
