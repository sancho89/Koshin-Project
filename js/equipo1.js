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
    }else{

    document.getElementById('container2').insertAdjacentHTML('beforeend',`<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id="coach">
    <div class="team-item">
        
        <div class="team-img position-relative overflow-hidden">
            <img class="img-fluid" src="img/morgana.jpg" alt="1000" width="1000">
            
        </div>
        <div class="bg-secondary text-center p-5">
            
            <h5 class="text-uppercase" id="nn">` + nombre + `</h5>
            <h5 class="text" id="posicionNuevoDiv">` + posicion + `</h5>
            <button id="botonBorrar" onclick="borrarNuevosDiv">Borrar</button>
            
            
        </div>
        <input type="button" id="botonModificar" value="Modificar ` + posicion + `" onclick="modificarNuevosDivs();">
       
        
        
    </div>
    
</div>`)
    }
};


// AGREGAR UN NUEVO DIV POR MEDIO DE APPEND CHILD (Funciona a medias)
/*
document.querySelector('#meterAlgo').onclick=agregarDiv;
function agregarDiv(){
    const nombre = document.getElementById('nombreJugador').value;
    const posicion = document.getElementById('posicionJugador').value;

    if (nombre == '' || posicion == ''){
        alert('No puedes dejar ningún hueco vacio');
    }else{
    const contenedor = document.getElementById('container2');
    const nuevoDiv = document.createElement('div');
        nuevoDiv.insertAdjacentHTML('beforeend',`
        <div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id="coach">
    <div class="team-item">
        
        <div class="team-img position-relative overflow-hidden">
            <img class="img-fluid" src="img/morgana.jpg" alt="1000" width="1000">
            
        </div>
        <div class="bg-secondary text-center p-5">
            
            <h5 class="text-uppercase" id="nn">` + nombre + `</h5>
            <h5 class="text" id="posicionNuevoDiv">` + posicion + `</h5>
            <button id="botonBorrar" onclick="borrarNuevosDiv">Borrar</button>
            
            
        </div>
        <input type="button" id="botonModificar" value="Modificar ` + posicion + `" onclick="modificarNuevosDivs();">
       
        
        
    </div>
    
</div>`);

       
        contenedor.appendChild(nuevoDiv);
    }

}
*/


// MODIFICAR NUEVOS DIVS
// 1. El javaScript de los nuevos divs agregados por formulario ya no funcionara
// para ello creamos una funcion para modificar y para borrar (En el HTML insertado en el 
// JavaScript se crean también las nuevas id de los divs).

const nombre = document.getElementById('nombreJugador').value;
    
    document.getElementById('botonModificar').onclick=modificarNuevosDivs;
    
    function modificarNuevosDivs(){
        
        const nuevoNombree = prompt('Escribe el nuevo nombre del jugador');
        document.getElementById('nn').innerHTML=nuevoNombree;
        
    }
    
    const btnBorrado = document.getElementById('botonBorrar').onclick=borrarNuevosDivs;
    function borrarNuevosDivs(){
    
        document.querySelector('#nuevoContenedor').remove();
    }














  