
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
    const formulario = document.querySelector('#formC')

    // Variables para campos

    const nombre = document.querySelector('#nombreC');
    const email = document.querySelector('#emailC');
    const asunto = document.querySelector('#asuntoC');
    const mensaje = document.querySelector('#mensajeC');
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    // Funcione 
    eventListeners();
    function eventListeners() {
        document.addEventListener('DOMContentLoaded', BotonDisabled);
    }

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    nombre.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Enviado de email
    formulario.addEventListener('sumbit', enviarEmail)
    

    // Funciones
    function BotonDisabled() {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed')
    }
     
    // Validacion del formulario
    function validarFormulario(e) {
        if(e.target.value.length > 0){

            const error = document.querySelector('p.error');
            if(error){
            error.remove();
            }
                
            
            console.log('Si hay texto')
            e.target.style.borderBottomColor = '#6C7293';
    
        }else{
                e.target.style.borderBottomColor = 'red';
                mostrarError('Todos los campos han de ser rellenados');
    
        }

        if(e.target.type === 'email'){
           
            
            if(er.test( e.target.value)) {

                const error = document.querySelector('p.error');
                if(error){
                    error.remove();
                }
                console.log('email valido');
            }else {
                e.target.style.borderBottomColor = 'red';
                mostrarError('El email no es valido');
                
            }
        }
    if( er.test( email.value) && asunto.value !== '' && mensaje.value !== '' && nombre.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed')
        }else{
            btnEnviar.disabled = true;
            btnEnviar.classList.add('cursor-not-allowed')
        }
    
    }

    function mostrarError(mensaje){
        const mensajeMal = document.createElement('p');
        mensajeMal.textContent = mensaje;
        mensajeMal.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5' , 'text-center' , 'error');

        const errores = document.querySelectorAll('.error');
        if(errores.length === 0) {
            formulario.appendChild(mensajeMal);
        }
        
        
    }

    // Envia el email
    function enviarEmail(e) {
        e.preventDefault();

}

    // Variables tweets
    const formularioTW = document.querySelector('#formularioTW');
    const listaTweets = document.querySelector('#lista-tweets');
    let tweets = [];

    // Event listeners

   eventListeners2();
    function eventListeners2() {
        formularioTW.addEventListener('click', agregarTweet);

    }



    // Funciones

    function agregarTweet(e) {
        e.preventDefault();


        // Texto donde el usuario escribe su mensaje
        const tweet = document.querySelector('#tweet').value;

        // Validacion 
        if(tweet === ''){
            mostrarError2("No puedes enviar texto vacio");

            return;
        }

        const tweetObj = {
            id: Date.now(),
            tweet: tweet
        }

        // Añadir el texto
        tweets = [...tweets, tweetObj]

        // Agregamos el html
        createHTML();


    }

        function mostrarError2(error2){
            const contenido = document.querySelector('#contenido');
            const mensajeError2 = document.createElement('p2');
            mensajeError2.textContent = error2;
            mensajeError2.classList.add('error2');
            
            
            const erorres2 = document.querySelectorAll('.error2');
            if(erorres2.length === 0) {
                contenido.appendChild(mensajeError2);
            }
            setTimeout(() => {
                mensajeError2.remove();
            }, 3000);
        
        
          
        }

        // Mostrar listado de tweets
        function createHTML(){

            limpiarHTML();

            if(tweets.length > 0) {
                tweets.forEach( tweet => {

                    const li = document.createElement('li');

                    li.innerText = tweet.tweet;

                    listaTweets.appendChild(li);


                });
            }
        }

        function limpiarHTML() {
            while( listaTweets.firstChild){
                listaTweets.removeChild(listaTweets.firstChild);
            }
        }
    
        // reiniciar formulario
        formularioTW.requestFullscreen()



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

  