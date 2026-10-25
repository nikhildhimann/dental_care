(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.active-sticky-header").css("height", $('header.active-sticky-header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header.active-sticky-header .header-sticky').outerHeight()
			$("header.active-sticky-header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header.active-sticky-header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	if($("a[href='#top']").length){
		$(document).on("click", "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}

	/* Hero Image Slider JS */
	const hero_image_slider = new Swiper('.hero-image-slider .swiper', {
		effect: 'fade',
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4000,
		}
	});

	/* Service Slider Metal JS */
	if ($('.service-slider-metal').length) {
		const service_slider = new Swiper('.service-slider-metal .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.service-pagination-metal',
				clickable: true,
			},
			breakpoints: {
				768:{
					slidesPerView: 2,
				},
				1300:{
					slidesPerView: 3,
				}
			}
		});
	}

	/* Testimonial Slider JS */
	if ($('.testimonial-slider').length) {
		const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			breakpoints: {
				768:{
					slidesPerView: 2,
				},
				1300:{
					slidesPerView: 3,
				}
			}
		});
	}

	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '70%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#youtubevideo').length) {
		var myPlayer = $("#youtubevideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 1500 });
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	function initHeadingAnimation() {
		
		if($('.text-effect').length) {
			var textheading = $(".text-effect");

			if(textheading.length === 0) return; gsap.registerPlugin(SplitText); textheading.each(function(index, el) {
				
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				
				if( $(el).hasClass('text-effect') ){
					gsap.set(el.split.chars, {
						opacity: .3,
						x: "-7",
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},

					x: "0",
					y: "0",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
				
			});
		}
		
		if ($('.text-anime-style-1').length) {
			let staggerAmount 	= 0.05,
				translateXValue = 0,
				delayValue 		= 0.5,
			   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.words, {
					duration: 1,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: staggerAmount,
					scrollTrigger: { trigger: element, start: "top 85%" },
					});
			});		
		}
		
		if ($('.text-anime-style-2').length) {				
			let	 staggerAmount 		= 0.03,
				 translateXValue	= 20,
				 delayValue 		= 0.1,
				 easeType 			= "power2.out",
				 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.chars, {
						duration: 1,
						delay: delayValue,
						x: translateXValue,
						autoAlpha: 0,
						stagger: staggerAmount,
						ease: easeType,
						scrollTrigger: { trigger: element, start: "top 85%"},
					});
			});		
		}
		
		if ($('.text-anime-style-3').length) {		
			let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
			
			 animatedTextElements.forEach((element) => {
				//Reset if needed
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });

				gsap.set(element.split.chars, {
					opacity: 0,
					x: "50",
				});

				element.animation = gsap.to(element.split.chars, {
					scrollTrigger: { trigger: element,	start: "top 90%" },
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: 0.02,
				});
			});		
		}
	}
	
	if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            initHeadingAnimation();
        });
    } else {
        window.addEventListener("load", initHeadingAnimation);
    }
	
	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 1024))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	function escapeFormHtml(text) {
		if (!text) return "";
		return String(text)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	/* Contact form validation */
	var $contactform = $("#contactForm");
	if ($contactform.validator) {
		$contactform.validator({focus: false});
	}
	$(document).off("submit.contact", "#contactForm").on("submit.contact", "#contactForm", function (event) {
		if (event.isDefaultPrevented && event.isDefaultPrevented()) {
			return;
		}
		event.preventDefault();
		submitForm($(this));
	});

	function submitForm($form){
		if (!$form || !$form.length) $form = $("#contactForm");
		var $btn = $form.find("button[type='submit']");
		var origText = $btn.html();
		$btn.prop("disabled", true).html('<i class="fa fa-spinner fa-spin me-2"></i> Sending...');

		setTimeout(function() {
			$form[0].reset();
			$btn.prop("disabled", false).html(origText);
			formSuccess($form);
		}, 400);
	}

	function formSuccess($form){
		if (!$form || !$form.length) $form = $("#contactForm");
		submitMSG(true, "Thank you! Your message has been sent successfully. We will be in touch shortly.", $form);
	}

	function submitMSG(valid, msg, $form){
		if (!$form || !$form.length) $form = $("#contactForm");
		var msgClasses = valid ? "h4 text-success mt-3" : "h4 text-danger mt-3";
		$form.find("#msgSubmit").removeClass("hidden").attr("class", msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Appointment form validation */
	var $appointmentForm = $("#appointmentForm");
	if ($appointmentForm.validator) {
		$appointmentForm.validator({focus: false});
	}
	$(document).off("submit.appointment", "#appointmentForm").on("submit.appointment", "#appointmentForm", function (event) {
		if (event.isDefaultPrevented && event.isDefaultPrevented()) {
			return;
		}
		event.preventDefault();
		submitappointmentForm($(this));
	});

	function submitappointmentForm($form){
		if (!$form || !$form.length) $form = $("#appointmentForm");
		var $btn = $form.find("button[type='submit']");
		var origText = $btn.html();
		var name = $form.find("#name").val() || "Valued Patient";
		var phone = $form.find("#phone").val() || "";
		var email = $form.find("#email").val() || "";
		var date = $form.find("#date").val() || "your requested date";
		var message = $form.find("#message").val() || "";

		$btn.prop("disabled", true).html('<i class="fa fa-spinner fa-spin me-2"></i> Booking Appointment...');

		setTimeout(function() {
			var appointmentId = "APT-" + Math.floor(10000 + Math.random() * 90000);
			var cfg = window.siteConfig || { clinicName: "Dental Clinic", whatsappNumber: "1512555789", storageKey: "clinic_appointments" };
			var clinicName = (cfg && cfg.clinicName) || "Dental Clinic";
			var rawWaNum = ((cfg && cfg.whatsappNumber) || "1512555789").replace(/[^0-9]/g, '');
			var storageKey = (cfg && cfg.storageKey) || "clinic_appointments";

			var waText = 
				"🦷 *New Appointment Booking Request*\n" +
				"🏥 *Clinic:* " + clinicName + "\n\n" +
				"👤 *Patient Name:* " + name + "\n" +
				"📞 *Phone Number:* " + phone + "\n" +
				"✉️ *Email:* " + (email || "Not Provided") + "\n" +
				"📅 *Preferred Date:* " + date + "\n" +
				"💬 *Message:* " + (message || "General Consultation") + "\n\n" +
				"🔖 *Booking Ref:* #" + appointmentId + "\n" +
				"_Please confirm my appointment slot. Thank you!_";

			var waUrl = "https://wa.me/" + rawWaNum + "?text=" + encodeURIComponent(waText);

			try {
				var saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
				saved.push({
					id: appointmentId,
					name: name,
					phone: phone,
					email: email,
					date: date,
					message: message,
					createdAt: new Date().toISOString()
				});
				localStorage.setItem(storageKey, JSON.stringify(saved));
			} catch (e) {
				console.error("Local storage error:", e);
			}

			// Open WhatsApp directly in new window
			window.open(waUrl, "_blank");

			$form[0].reset();
			$btn.prop("disabled", false).html(origText);

			var successCardHtml = '' +
				'<div class="appointment-success-card">' +
				'  <div class="appointment-success-header">' +
				'    <div class="success-icon-wrap"><i class="fa-solid fa-circle-check"></i></div>' +
				'    <div>' +
				'      <h4 class="success-headline">Appointment Details Submitted!</h4>' +
				'      <p class="success-subline">Booking Reference: #' + appointmentId + '</p>' +
				'    </div>' +
				'  </div>' +
				'  <div class="appointment-success-body">' +
				'    <p>Thank you, <strong>' + escapeFormHtml(name) + '</strong>! Your appointment request for <strong>' + escapeFormHtml(date) + '</strong> has been prepared.</p>' +
				'    <p class="appointment-contact-note"><i class="fa-brands fa-whatsapp" style="color:#25D366;font-size:20px;"></i> <strong>WhatsApp opened automatically</strong> with your pre-filled booking details.</p>' +
				'    <div style="margin-top:16px;">' +
				'      <a href="' + waUrl + '" target="_blank" class="btn-default" style="background-color:#25D366;border-color:#25D366;color:#ffffff;display:inline-flex;align-items:center;gap:8px;">' +
				'        <i class="fa-brands fa-whatsapp"></i> Open WhatsApp Chat' +
				'      </a>' +
				'    </div>' +
				'  </div>' +
				'</div>';

			$form.find("#msgSubmit").removeClass("hidden text-danger").html(successCardHtml);
		}, 500);
	}

	function appointmentformSuccess(){
		submitappointmentForm($("#appointmentForm"));
	}

	function appointmentsubmitMSG(valid, msg){
		var msgClasses = valid ? "h4 text-success" : "h4 text-danger";
		$("#msgSubmit").removeClass("hidden").addClass(msgClasses).text(msg);
	}
	/* Appointment form validation end */

	/* Animated Wow Js */	
	new WOW().init();

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}
	
	/* Image Coparision JS Start */
	if ($('.transformation_image').length) {
		$(".transformation_image").twentytwenty({
			no_overlay: true,
		});
	}
	/* Image Coparision JS End */

	/* Service Item List Active Start */
	var $service_item_list = $('.service-item-list');
	if ($service_item_list.length) {
		var $service_item = $service_item_list.find('.service-item');

		if ($service_item.length) {
			$service_item.on({
				mouseenter: function () {
					if (!$(this).hasClass('active')) {
						$service_item.removeClass('active'); 
						$(this).addClass('active'); 
					}
				},
				mouseleave: function () {
					// Optional: Add logic for mouse leave if needed
				}
			});
		}
	}

})(jQuery);