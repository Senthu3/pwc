require([
    'jquery',
    'owl.carousel'
], function($){
    $(document).ready(function() {
        $('.owl-carousel ').owlCarousel({
            loop:false,
            nav:false,
            items:1,
            dots:true,
            autoplay:true,
            autoplayTimeout:3000
        })
    });
});