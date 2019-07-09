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

    $("div.lazy").lazyload({
        effect : "fadeIn"
    });

    $('#pagepiling').pagepiling({
        verticalCentered: true,
        css3: false,
        onLeave: function (index, nextIndex, direction) {
            
            if (nextIndex == 4) {
                $('#pp-nav').fadeOut();
            }
 
            if (index == 4) {
                $('#pp-nav').fadeIn();
            }
        },
    });

});