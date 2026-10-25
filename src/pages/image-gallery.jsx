import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_image_gallery() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Image <span>gallery</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Image gallery</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Photo Gallery Start */}
        <div className="page-gallery">
          <div className="container">
            {/* gallery section start */}
            <div className="row gallery-items page-gallery-box">
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp">
                  <a href="images/gallery-1.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="0.2s">
                  <a href="images/gallery-2.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="0.4s">
                  <a href="images/gallery-3.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="0.6s">
                  <a href="images/gallery-4.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-4.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="0.8s">
                  <a href="images/gallery-5.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-5.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="1s">
                  <a href="images/gallery-6.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-6.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="1.2s">
                  <a href="images/gallery-7.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-7.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="1.4s">
                  <a href="images/gallery-8.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-8.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
              <div className="col-lg-4 col-6">
                {/* Image Gallery start */}
                <div className="photo-gallery wow fadeInUp" data-wow-delay="1.6s">
                  <a href="images/gallery-9.jpg" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/gallery-9.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Image Gallery end */}
              </div>
            </div>
            {/* gallery section end */}
          </div>
        </div>
        {/* Photo Gallery End */}
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
