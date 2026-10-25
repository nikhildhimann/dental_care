import Page_404 from './pages/404.jsx';
import Page_about from './pages/about.jsx';
import Page_blog_single from './pages/blog-single.jsx';
import Page_blog from './pages/blog.jsx';
import Page_book_appointment from './pages/book-appointment.jsx';
import Page_case_study_single from './pages/case-study-single.jsx';
import Page_case_study from './pages/case-study.jsx';
import Page_contact from './pages/contact.jsx';
import Page_faqs from './pages/faqs.jsx';
import Page_image_gallery from './pages/image-gallery.jsx';
import Page_index_2 from './pages/index-2.jsx';
import Page_index_3 from './pages/index-3.jsx';
import Page_index_image from './pages/index-image.jsx';
import Page_index_slider from './pages/index-slider.jsx';
import Page_index_video from './pages/index-video.jsx';
import Page_index_videob17c from './pages/index-videob17c.jsx';
import Page_index from './pages/index.jsx';
import Page_service_single from './pages/service-single.jsx';
import Page_services from './pages/services.jsx';
import Page_team_single from './pages/team-single.jsx';
import Page_team from './pages/team.jsx';
import Page_testimonials from './pages/testimonials.jsx';
import Page_video_gallery from './pages/video-gallery.jsx';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import siteConfig from './siteConfig.js';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

if (typeof window !== 'undefined') {
  window.siteConfig = siteConfig;
  document.title = `${siteConfig.clinicName} - ${siteConfig.clinicSubtitle}`;
}

const pages = {
  '': Page_index_video,
  'index': Page_index_video,
  'index-video': Page_index_video,
  'index-videob17c': Page_index_video,
  'index-2': Page_index_video,
  'index-3': Page_index_video,
  'index-image': Page_index_video,
  'index-slider': Page_index_video,
  '404': Page_404,
  'about': Page_about,
  'blog-single': Page_blog_single,
  'blog': Page_blog,
  'book-appointment': Page_book_appointment,
  'case-study-single': Page_case_study_single,
  'case-study': Page_case_study,
  'contact': Page_contact,
  'faqs': Page_faqs,
  'image-gallery': Page_image_gallery,
  'service-single': Page_service_single,
  'services': Page_services,
  'team-single': Page_team_single,
  'team': Page_team,
  'testimonials': Page_testimonials,
  'video-gallery': Page_video_gallery,
};

const scripts = [
  'jquery-3.7.1.min.js', 'bootstrap.min.js', 'validator.min.js',
  'jquery.slicknav.js', 'swiper-bundle.min.js', 'jquery.waypoints.min.js',
  'jquery.counterup.min.js', 'jquery.magnific-popup.min.js', 'SmoothScroll.js',
  'parallaxie.js', 'jquery.event.move.js', 'jquery.twentytwenty.js', 'gsap.min.js',
  'magiccursor.js', 'SplitText.min.js', 'ScrollTrigger.min.js',
  'jquery.mb.YTPlayer.min.js', 'wow.min.js', 'function.js'
];

function App() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const cleanName = path.split('/').pop()?.replace(/\?.*$/i, '') || '';
  const isHomePage = !cleanName || cleanName === 'index' || cleanName.startsWith('index-');
  const Page = isHomePage ? Page_index_video : (pages[cleanName] || pages['404'] || Page_index_video);

  useEffect(() => {
    let cancelled = false;
    const loaded = [];
    const load = async () => {
      for (const file of scripts) {
        if (cancelled) return;
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = '/js/' + file;
          script.onload = resolve;
          script.onerror = resolve;
          document.body.appendChild(script);
          loaded.push(script);
        });
      }
      // function.js registers its preloader handler on window.load, but React
      // adds that script after the browser's load event has already fired.
      // Run the same fade once the original frontend scripts are ready.
      if (!cancelled && window.jQuery) {
        window.jQuery('.preloader').fadeOut(600);
      }
    };
    load();
    return () => { cancelled = true; loaded.forEach((script) => script.remove()); };
  }, [cleanName]);

  return (
    <>
      <Page />
      <FloatingWhatsApp />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
