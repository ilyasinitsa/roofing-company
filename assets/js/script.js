$(document).ready(function() {
    $( '.header__menu-btn' ).click(function() {
        $(this).toggleClass('active');
    });

    const swiper = new Swiper('.examples__slider', {
        slidesPerView: 2.5,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.examples__slider-control_next',
          prevEl: '.examples__slider-control_prev',
        }
    });
});