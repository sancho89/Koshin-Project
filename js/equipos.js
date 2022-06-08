// BORRAR UN DIV (Equipo 1)


const caja = document.querySelectorAll("[data-id]");

for (const el of caja){
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.remove();
      alert("ELEMENTO BORRADO");
    });
  }



// MODIFICAR EL TITULO Y LA DESCRIPCION DEL EQUIPO (Equipos)

var  divtitulo = document.getElementById("titulo");


var divparrafo = document.getElementById("parrafo");


    document.getElementByID("botontitulo").onclick=cambiarTitulo;



    document.getElementByID("botonparrafo").onclick=cambiarParrafo;


function cambiarTitulo(){
var nuevotitulo;
divtitulo=prompt('Escribe el nuevo titulo que deseas cambiar','');


if (divtitulo == '' || divtitulo == null) {
    alert('No puedes dejar el titulo vacio, debes introdcir algo')
    
} else {
    alert('El nuevo titulo es: ' + divtitulo)
document.getElementById('titulo').innerHTML= divtitulo;
}

}

function cambiarParrafo(){
divparrafo=prompt('Escribe el nuevo parrafo que deseas cambiar','');
if (divparrafo == '' || divparrafo == null){
    alert('No puedes dejar la descripción vacia, debes introdcir algo')
    document.getElementById('parrafo');
}

else {
alert('El nuevo parrafo es: ' + divparrafo)
document.getElementById('parrafo').innerHTML= divparrafo;

}

}


// CAMBIAR LOS NOMBRES DE LOS JUGADORES (Equipo 1)

var textoCoach = document.getElementById("textoCoach");
document.getElementById("botonTextoCoach").onclick=cambiarCoach();




var textoTop = document.getElementById("textoTop");
document.getElementById("botonTextoTop").onclick=cambiarTop();



var textoJungle = document.getElementById("textoJungle");
document.getElementById("botonTextoJungle").onclick=cambiarJungle();


var textoMid = document.getElementById("textoMid");
document.getElementById("botonTextoMid").onclick=cambiarMid();




var textoAdc = document.getElementById("textoAdc");
document.getElementById("botonTextoAdc").onclick=cambiarAdc();

var textoSupport = document.getElementById("textoSupport");
document.getElementById("botonTextoSupport").onclick=cambiarSupport();




// CAMBIAR EL NOMBRE DE LOS DIVS

function cambiarCoach(){
    textoCoach=prompt('Escribe el nuevo nombre del coach','');
    if (textoCoach == '' || textoCoach == null){
        alert('No puedes dejar un espacio en blanco');
        textoCoach = '-----';
        document.getElementById('textoCoach').innerHTML=textoCoach;
    } else {
    document.getElementById('textoCoach').innerHTML=textoCoach;
    }   
}

function cambiarTop(){
    textoTop=prompt('Escribe el nuevo nombre del top','');
    if (textoTop == '' || textoTop == null);
    document.getElementById('textoTop').innerHTML=textoTop;

    
}

function cambiarJungle(){
    textoJungle=prompt('Escribe el nuevo nombre del jungle','');
    document.getElementById('textoJungle').innerHTML=textoJungle;

    
}

function cambiarMid(){
    textoMid=prompt('Escribe el nuevo nombre del mid','');
    document.getElementById('textoMid').innerHTML=textoMid;

    
}

function cambiarAdc(){
    textoAdc=prompt('Escribe el nuevo nombre del adc','');
    document.getElementById('textoAdc').innerHTML=textoAdc;

    
}

function cambiarSupport(){
    textoSupport=prompt('Escribe el nuevo nombre del support','');
    document.getElementById('textoSupport').innerHTML=textoSupport;

    
}

