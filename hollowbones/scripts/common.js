$(document).ready(
    function () {
        $("#navToggle").click(function () {
            $(this).toggleClass("active");
            $(".overlay").toggleClass("open");
            // this line ▼ prevents content scroll-behind
            $("body").toggleClass("locked");
        });

        $(".overlay a").click(function () {
            $("#navToggle").toggleClass("active");
            $(".overlay").toggleClass("open");
            $("body").toggleClass("locked");
        });

        $('.button_close').click(function () {
            $(this).toggleClass("active");
            $(".overlay").toggleClass("open");
            // this line ▼ prevents content scroll-behind
            $("body").toggleClass("locked");
        });

        var itemHeight = $('.overlayMenu ul').height(),
            windowSize = $(window).width();

        if (windowSize >= 768) {
            $('.overlayMenu .contact-address').css({height: itemHeight + 'px'});
            $(window).on('resize', function(event) {
                itemHeight = $('.overlayMenu ul').height();
                $('.overlayMenu  .contact-address').css({
                    height: itemHeight + 'px'
                });
            });
        }

        //map including
        function initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 8,
                center: { lat: -34.397, lng: 150.644 },
            });
            const geocoder = new google.maps.Geocoder();
            document.getElementById("submit").addEventListener("click", () => {
                geocodeAddress(geocoder, map);
            });
        }

        function geocodeAddress(geocoder, resultsMap) {
            const address = document.getElementById("address").value;
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    resultsMap.setCenter(results[0].geometry.location);
                    new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location,
                    });
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }

    }
);