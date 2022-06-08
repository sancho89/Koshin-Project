// BORRAR UN DIV (Equipo 1)
const caja = document.querySelectorAll("[data-id]");

for (const el of caja){
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.remove();
      alert("Se ha eliminado el div");
    });
}



document.querySelector('#añadirRol').onclick = () => {

    document.getElementById('container2').innerHTML += `<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id="coach">
    <div class="team-item">
        <div class="team-img position-relative overflow-hidden">
            <img class="img-fluid" src="img/chicalol.png" alt="">
            
        </div>
        <div class="bg-secondary text-center p-5">
            
            <h5 class="text-uppercase" id="textoCoach">Litros</h5>
            <h5 class="text" id="coach2" >Coach</h5>
            <button data-id="1">Borrar</button>
            
            
        </div>
        <input type="button" id="botonTextoMid" value="Modificar" onclick="cambiarCoach();">
       
        
        
    </div>
    
</div>`;
  }
  



// CAMBIAR LOS NOMBRES DE LOS JUGADORES (Equipo 1)

let textoCoach = document.getElementById("textoCoach");
let botonTextoCoach = document.getElementById("botonTextoCoach").addEventListener("click", cambiarCoach());
let textoTop = document.getElementById("textoTop");
let botonTextoTop = document.getElementById("botonTextoTop").addEventListener("click", cambiarTop());
let textoJungle = document.getElementById("textoJungle");
let botonTextoJungle = document.getElementById("botonTextoJungle").addEventListener("click", cambiarJungle());
let textoMid = document.getElementById("textoMid");
let botonTextoMid = document.getElementById("botonTextoMid").addEventListener("click", cambiarMid());
let textoAdc = document.getElementById("textoAdc");
let botonTextoAdc = document.getElementById("botonTextoAdc").addEventListener("click", cambiarAdc());
let textoSupport = document.getElementById("textoSupport");
let botonTextoSupport = document.getElementById("botonTextoSupport").addEventListener("click", cambiarSupport());

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
    if (textoTop == '' || textoTop == null){
        alert('No puedes dejar un espacio en blanco');
        textoTop = '-----';
        document.getElementById('textoTop').innerHTML=textoTop;
    } else{
        document.getElementById('textoTop').innerHTML=textoTop;

    }  
}

function cambiarJungle(){
    textoJungle=prompt('Escribe el nuevo nombre del jungle','');
    if (textoJungle == '' || textoJungle == null){
        alert('No puedes dejar un espacio en blanco');
        textoJungle = '-----';
        document.getElementById('textoJungle').innerHTML=textoJungle;
        
    } else {
        document.getElementById('textoJungle').innerHTML=textoJungle
    } 
}

function cambiarMid(){
    textoMid=prompt('Escribe el nuevo nombre del mid','');
    if (textoMid == '' || textoMid == null){
        alert('No puedes dejar un espacio en blanco');
        textoMid = '-----';
        document.getElementById('textoMid').innerHTML=textoMid;
        
    }else {
    document.getElementById('textoMid').innerHTML=textoMid;
    }
}

function cambiarAdc(){
    textoAdc=prompt('Escribe el nuevo nombre del adc','');
    if (textoAdc == '' || textoAdc == null){
        alert('No puedes dejar un espacio en blanco');
        textoAdc = '-----';
        document.getElementById('textoAdc').innerHTML=textoAdc; 
    }else{
        document.getElementById('textoAdc').innerHTML=textoAdc; 
    }
}

function cambiarSupport(){
    textoSupport=prompt('Escribe el nuevo nombre del support','');
    if (textoSupport == '' || textoSupport == null){
        alert('No puedes dejar un espacio en blanco');
    }else {
        document.getElementById('textoSupport').innerHTML=textoSupport;
        
    }
}


/*function anyadirRol() {
    let nodoForm = document.querySelector('.container2');

    let nuevoNodo = document.createElement('div');

nuevoNodo.innerHTML = `<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id="coach">
<div class="team-item">
    <div class="team-img position-relative overflow-hidden">
        <img class="img-fluid" src="img/chicalol.png" alt="">
        
    </div>
    <div class="bg-secondary text-center p-5">
        
        <h5 class="text-uppercase" id="textoCoach">Litros</h5>
        <h5 class="text" id="coach2" >Coach</h5>
        <button data-id="1">Borrar</button>
        
        
    </div>
    <input type="button" id="botonTextoMid" value="Modificar" onclick="cambiarCoach();">
   
    
    
</div>

</div>`
nodoForm.insertBefore(nuevoNodo, nodoForm.querySelector('#container2'));
}
*/

/*function anyadirRol(){
    let d1 = document.querySelector('#container2');
    d1.insertAdjacentHTML('afterend' , `<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id="coach">
    <div class="team-item">
        <div class="team-img position-relative overflow-hidden">
            <img class="img-fluid" src="img/chicalol.png" alt="">
            
        </div>
        <div class="bg-secondary text-center p-5">
            
            <h5 class="text-uppercase" id="textoCoach"> Litros</h5>
            <h5 class="text" id="coach2" >Coach</h5>
            <button data-id=" ">Borrar</button>
            
            
        </div>
        <input type="button" id="botonTextoMid" value="Modificar" onclick="cambiarCoach();">
       
        
        
    </div>
    
    </div>`);
}
*/











  