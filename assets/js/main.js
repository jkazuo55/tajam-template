// start change background header when there is scroll
window.onscroll = function() {
        const header = document.getElementsByClassName('heading')[0];
        const headerContainer = header.children[0];
        header.classList.toggle("heading--background", window.pageYOffset > 0)
    }
    // end change background header when there is scroll



let videoStory = document.querySelector('.movie__story');

function playPauseVideo() {
    if (videoStory.paused) {
        videoStory.play();
    } else {
        videoStory.pause();
    }
}


$(document).ready(function() {
    // start slider for hero section
    $('.slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
    });
    // end slider for hero section

    $('.testimonials__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonials__graphic'
    });
    $('.testimonials__graphic').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonials__slider',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
    });

});