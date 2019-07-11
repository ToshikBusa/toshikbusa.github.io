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

    if ($(window).width() >= '768'){
        $("#post-list").sticky({
            topSpacing: 40,
            bottomSpacing: 229
        });
        $('#posts-list').masonry({
          itemSelector: '.col-lg-4',
          percentPosition: true
        });

        $('#category').masonry({
          itemSelector: '.col-lg-6',
          percentPosition: true
        });
    }
});