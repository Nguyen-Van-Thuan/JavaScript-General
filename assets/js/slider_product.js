$(document).ready(function () {
    $(".owl-theme-product").owlCarousel();
});
$('.owl-theme-product').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})