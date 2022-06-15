$(document).ready(function() {
    // $('.single-item').slick({
    //     dots: true,
    //     customPaging: function(slider, i) {
    //         return '<a href="#">hola</a>';
    //     },
    // });

    $('.carousel__slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
    });
});