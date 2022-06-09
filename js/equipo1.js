// BORRAR UN DIV (Equipo 1)
const caja = document.querySelectorAll("[data-id]");

for (const el of caja){
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.remove();
      alert("Se ha eliminado el div");
    });
}



document.querySelector('#añadir').onclick = () => {

   let nombreJugador = document.getElementById('nombreJugador').value;
   let posicionJugador = document.getElementById('posicionJugador').value;
   
  
    document.getElementById('container2').insertAdjacentHTML('beforeend',
    `<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s">
    <div class="team-item">
        
        <div class="team-img position-relative overflow-hidden">
            <img class="img-fluid" src="img/chicalol.png" alt="">
            
        </div>
        <div class="bg-secondary text-center p-5">
            
            <h5 class="text-uppercase" id="textoCoach">` + nombreJugador + `</h5>
            <h5 class="text" id="coach2" >EEEEEEEEE</h5>
            <button data-id="1">Borrar</button>
            
            
        </div>
        <input type="button" id="botonTextoMid" value="Modificar Coach" onclick="cambiarCoach();">
       
        
        
    </div>
    
</div>`);
  }
  
/*document.querySelector('').onclick = () => {

    document.getElementById('container2').insertAdjacentHTML('afterend',
    `<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id="coach">
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
    
</div>`);
  }
  */
 

/*document.querySelector('#añadirRol').onclick = () => {
<button id="añadir" class="btn btn-primary w-100 py-3">Anyadir</button>
    const nombre = prompt("Escribe el nombre del nuevo staff")
    const cargo = prompt("Escribe el cargo que ocupa")
    const sobreM<button id="añadir" class="btn btn-primary w-100 py-3">Anyadir</button>i = prompt("Escribe informacion adicional")
  
    document.getElementById('container2').insertAdjacentHTML('beforeend',
    `<div class="col-lg-5 col-md-7 wow fadeInUp p-5" data-wow-delay="0.1s" id="coach">
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
    
</div>`);
  }
  */




/*document.querySelector('#añadir').onclick = () => {

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
  */


  



// CAMBIAR LOS NOMBRES DE LOS JUGADORES (Equipo 1)

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














  