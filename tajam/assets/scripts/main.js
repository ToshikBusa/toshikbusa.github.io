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

	$('.multiple-reviews').slick({
    	arrows: true,
    	autoplay: true,
	    dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/arrow_prev.png" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="assets/images/arrow_next.png" alt="" /></button>',
		customPaging: function(slick, index) {
		    var image = $(slick.$slides[index]).find('.slider-img').attr('src');
		    return '<img src="' + image + '" alt="" /> '
		}
	});

	$("#navbarSupportedContent").on('click','a', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 1500);
	});

});