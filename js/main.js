(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    //Variables
    const btnEnviar = document.querySelector('#enviar');

    // Variables para campos

    const nombre = document.querySelector('nombreC');
    const email = document.querySelector('emailC');
    const asunto = document.querySelector('asuntoC');
    const mensaje = document.querySelector('mensajeC');

    // Campos del formulario
    email.addEventListener('blur' , validarFormulario);

    // Validacion del formulario
    function validarFormulario(e) {
        
    }
    
    
    // Funcione 
    eventListeners();
    function eventListeners() {
        document.addEventListener('DOMContentLoaded', BotonDisabled);
    }

    // Funciones
    function BotonDisabled() {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed')
    }




    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);