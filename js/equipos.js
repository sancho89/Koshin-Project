var  divtitulo = document.getElementById("titulo");


var divparrafo = document.getElementById("parrafo");


    document.getElementByID("botontitulo").onclick=cambiarTitulo;



    document.getElementByID("botonparrafo").onclick=cambiarParrafo;


function cambiarTitulo(){
var nuevotitulo;
divtitulo=prompt('Escribe el nuevo titulo que deseas cambiar','');


if (divtitulo == '') {
    alert('No puedes dejar el titulo vacio, debes introdcir algo')
    document.getElementById('titulo');
} else {
    alert('El nuevo titulo es: ' + divtitulo)
document.getElementById('titulo').innerHTML= divtitulo;
}

}

function cambiarParrafo(){
divparrafo=prompt('Escribe el nuevo parrafo que deseas cambiar','');
if (divparrafo == '' ){
    alert('No puedes dejar la descripción vacia, debes introdcir algo')
    document.getElementById('parrafo');
}

else {
alert('El nuevo parrafo es: ' + divparrafo)
document.getElementById('parrafo').innerHTML= divparrafo;

}



}

