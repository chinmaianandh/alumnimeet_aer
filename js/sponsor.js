/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Gallery
5. Init Milestones
6. Init Logos Slider


******************************/

$(document).ready(function() {
    "use strict";

    /* 

    1. Vars and Inits

    */

    var header = $('.header');
    var ctrl = new ScrollMagic.Controller();

    initLogosSlider();

    function initLogosSlider() {
        if ($('.logos_slider').length) {
            var logosSlider = $('.logos_slider');
            logosSlider.owlCarousel({
                items: 4,
                loop: true,
                autoplay: false,
                smartSpeed: 1200,
                nav: false,
                dots: false,
                responsive: {
                    0: { items: 1 },
                    769: { items: 2 },
                    992: { items: 3 },
                    1200: { items: 4 }
                }
            });
        }
    }

});