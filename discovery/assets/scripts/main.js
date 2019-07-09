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

});