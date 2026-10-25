import siteConfig from "../siteConfig.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Page_blog() {
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Our <span>Blog</span></h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Our Blog</li>
                    </ol>
                  </nav>
                </div>
                {/* Page Header Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Page Blog Start */}
        <div className="page-blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Posts Item List Start */}
                <div className="post-item-list">
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-1.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Orthodontic Care</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Achieve perfectly for aligned smile</a></h2>
                        <p>Transform your smile with advanced orthodontic care designed to correct.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-2.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Oral Hygiene Tips</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Daily Care for a Smile &amp; Oral Health</a></h2>
                        <p>Maintain healthy beautiful smile with daily oral care habits that protect your teeth.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-3.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Kids Dental Care</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Smile Brighter with Daily Oral Care</a></h2>
                        <p>Daily oral care keeps your teeth healthy, gums strong &amp; smile beautifully radiant.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-4.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Dental Care Tips</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Cavity Prevention Guide Plan Easy</a></h2>
                        <p>Easy cavity prevention plans protect teeth and maintain healthy smiles daily.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-5.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Oral Hygiene Routine</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Oral Hygiene Routine Care Daily</a></h2>
                        <p>Daily oral hygiene routines keep your teeth clean and gums healthy always.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                  {/* Post Item Start */}
                  <div className="post-item wow fadeInUp" data-wow-delay="1s">
                    <div className="post-featured-image">
                      <a href="blog-single" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="images/post-6.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="post-item-tag">
                        <ul>
                          <li><a href="#">Gum Health Care</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-body">
                      <div className="post-item-content">
                        <h2><a href="blog-single">Dental Check up Advice Guide Now</a></h2>
                        <p>Get expert dental checkup advice to maintain a healthy, confident smile today.</p>
                      </div>
                      <div className="post-item-btn">
                        <a href="blog-single" className="readmore-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Item End */}
                </div>
                {/* Posts Item List End */}
              </div>
              <div className="col-lg-12">
                {/* Page Pagination Start */}
                <div className="page-pagination wow fadeInUp" data-wow-delay="0.4s">
                  <ul className="pagination">
                    <li><a href="#"><i className="fa-solid fa-angle-left" /></a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="fa-solid fa-angle-right" /></a></li>
                  </ul>
                </div>
                {/* Page Pagination End */}
              </div>
            </div>
          </div>
        </div>
        {/* Page Blog End */}
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
