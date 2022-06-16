// start change background header when there is scroll
window.onscroll = function() {
        const header = document.getElementsByClassName('heading')[0];
        const headerContainer = header.children[0];
        header.classList.toggle("heading--background", window.pageYOffset > 0)
    }
    // end change background header when there is scroll


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
});