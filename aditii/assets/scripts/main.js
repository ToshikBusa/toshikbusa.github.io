$(document).ready(function() {

    $(".navbar-toggler").click(function() {
        $(".navbar-toggler-icon").toggleClass("active");
    });

    $('.multiple-items').slick({
    	arrows: false,
    	autoplay: true,
	    dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

    $('.multiple-items-3').slick({
        arrows: true,
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/arrow_prev.png" alt="" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/images/arrow_next.png" alt="" /></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

});