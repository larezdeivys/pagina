(function ($) {
    'use strict';

    // efecto de scroll
    var wow = new WOW(
      {
        boxClass:     'wowload',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true
      }
    );
    wow.init();


    // boton de ir al inicio
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<img class="inicio" src="img/home.png">'
        });
    }

    var $window = $(window);

    // menu de navegacion
	$('.btn-menu').on('click', function () {
        $('.btn-menu').toggleClass('close')
        $('.nav-ul').toggleClass('nav-ul-open')
    })
    $window.on('scroll', function () {
        $('.btn-menu').removeClass('close')
        $('.nav-ul').removeClass('nav-ul-open')
    })


    // precarga
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);