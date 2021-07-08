
$('.counter').counterUp({
    delay: 30,
    time: 3000
});
var mixer = mixitup('.gellery-mix');

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    },
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:2000

})