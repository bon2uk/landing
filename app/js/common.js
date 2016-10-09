;
$(document).ready(function() {
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-mnu").slideToggle();
	});

$('.about-articles[data-link=tab-2]').hide();
$('.about-articles[data-link=tab-3]').hide();

$('.article-btn').click(function() {

    $('.about-articles').hide();       
    $('.about-articles[data-link=' + $(this).data('link') + ']').fadeIn( 1000);
    
});
	$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 400);
	return false;
	});
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	

$(function(){
  $('#Container').mixItUp();
});

   

$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Bouncy</small>';
			}
		}
	});
	
$('.galleryWrap').magnificPopup({
	mainClass: 'mfp-zoom-in',
	delegate: 'a',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});

	 $('.owl-carousel').owlCarousel({
	items:1,
	loop:true,
	autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,


	 });

	 $("a[href='#callback']").click(function() {
			var dataForm = $(this).data("form");
			var dataText = $(this).data("text");
			$(".form-callback h4").text(dataText);
			$(".form-callback [name=admin-data]").val(dataForm);
		});
	 $(" a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
	 $("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".form-callback h4").text(dataText);
		$(".form-callback [name=admin-data]").val(dataForm);
	});

	$("body").append('<div class="top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>'); 
 
 	$("body").on("click", ".top",function(){
	$("html, body").animate({scrollTop: 0}, "slow");
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()+2000){
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});
});
