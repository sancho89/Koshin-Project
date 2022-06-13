// AUTOR: Carlos Lázaro

// CAMBIAR LOS NOMBRES DE LOS JUGADORES 
//1. Primero se recogen los ids de los textos y del boton.
let textoCoach = document.getElementById("textoCoach");
document.getElementById("botonTextoCoach").onclick=cambiarCoach;
//let botonTextoCoach = document.getElementById("botonTextoCoach").addEventListener("click", cambiarCoach());
let textoTop = document.getElementById("textoTop");
//let botonTextoTop = document.getElementById("botonTextoTop").addEventListener("click", cambiarTop());
document.getElementById("botonTextoTop").onclick=cambiarTop;


let textoJungle = document.getElementById("textoJungle");
document.getElementById("botonTextoJungle").onclick=cambiarJungle;

let textoMid = document.getElementById("textoMid");
 document.getElementById("botonTextoMid").onclick=cambiarMid;


let textoAdc = document.getElementById("textoAdc");
 document.getElementById("botonTextoAdc").onclick=cambiarAdc;

let textoSupport = document.getElementById("textoSupport");
document.getElementById("botonTextoSupport").onclick=cambiarSupport;


// CAMBIAR LOS NOMBRES DE LOS JUGADORES 
// 2. Se crea una función para cada posición.

function cambiarCoach(){
    textoCoach=prompt('Escribe el nuevo nombre del coach','');
    if (textoCoach == '' || textoCoach == null){  
    } else {
    document.getElementById('textoCoach').innerHTML=textoCoach;
    }   
}

function cambiarTop(){
    textoTop=prompt('Escribe el nuevo nombre del top','');
    if (textoTop == '' || textoTop == null){

    } else{
        document.getElementById('textoTop').innerHTML=textoTop;

    }  
}

function cambiarJungle(){
    textoJungle=prompt('Escribe el nuevo nombre del jungle','');
    if (textoJungle == '' || textoJungle == null){  
    } else {
        document.getElementById('textoJungle').innerHTML=textoJungle
    } 
}

function cambiarMid(){
    textoMid=prompt('Escribe el nuevo nombre del mid','');
    if (textoMid == '' || textoMid == null){    
    }else {
    document.getElementById('textoMid').innerHTML=textoMid;
    }
}

function cambiarAdc(){
    textoAdc=prompt('Escribe el nuevo nombre del adc','');
    if (textoAdc == '' || textoAdc == null){ 
    }else{
        document.getElementById('textoAdc').innerHTML=textoAdc; 
    }
}

function cambiarSupport(){
    textoSupport=prompt('Escribe el nuevo nombre del support','');
    if (textoSupport == '' || textoSupport == null){
    }else {
        document.getElementById('textoSupport').innerHTML=textoSupport;
        
    }
}

// BORRAR UN JUGADOR
// 1. Se recogen los id de los botones de borrar en uno solo
// 2. Mediante un for se recorren todos y con la funcion remove se elimina uno por uno.
const caja = document.querySelectorAll("[data-id]");

for (const el of caja){
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.remove();
      alert("Se ha eliminado el div");
    });
}


// AGREGAR NUEVOS MIEMBROS POR MEDIO DE FORMULARIO
// AGREGAR UN NUEVO MIEMBRO POR MEDIO DE FORMULARIO
// 1. Se recoge el id del boton, de los valores dentro del formulario 
// y el id de la zona donde reaparecera el nuevo div

// 2. Se inserta el HTML dentro del JavaScript, no puede haber huecos 
// vacios, validación para su funcionamiento.
document.querySelector('#meterAlgo').onclick = () => {
    const nombre = document.getElementById('nombreJugador').value;
    const posicion = document.getElementById('posicionJugador').value;
    
    if (nombre == '' || posicion == ''){
        alert('No puedes dejar ningún hueco vacio');
    } else {
    document.getElementById('contenedor').insertAdjacentHTML('beforeend',`<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id='nuevoContenedor'>
    <div class="team-item">
        <div class="team-img position-relative overflow-hidden">
            <img class="img-fluid" src="img/personajevalorant.jpg" alt="">
            
        </div>
        <div class="bg-secondary text-center p-5">
            
            <h5 class="text-uppercase" id="nuevoNombre">` + nombre + `</h5>
            <h5 class="text" id="posicionNuevoDiv">` + posicion + `</h5>
            <button id="botonBorrar" onclick="borrarNuevosDiv">Borrar</button>
            
        </div>
        <input type="button" id="botonTextoAdc" value="Modificar ` + posicion + `" onclick="modificarNuevosDivs();">
        
        
    </div>
    
    
    </div>`)
    }
    
    
    };
    const nombre = document.getElementById('nombreJugador').value;
    
    document.getElementById('botonModificar').onclick=modificarNuevosDivs;
    
    function modificarNuevosDivs(){
        
        const nuevoNombree = prompt('Escribe el nuevo nombre del jugador');
        document.getElementById('nuevoNombre').innerHTML=nuevoNombree;
        
    }
    


    





  