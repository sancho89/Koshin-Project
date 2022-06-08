const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

const contenedor = document.querySelectorAll("[data-id]");

const titulos = document.querySelectorAll('h5');
const cargos = document.querySelectorAll('span');
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeEls = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });

  document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });

for (const el of contenedor){
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.parentElement.remove();
    alert("ELEMENTO BORRADO");
  });
}


document.querySelector('#añadir').onclick = () => {

  const nombre = prompt("Escribe el nombre del nuevo staff")
  const cargo = prompt("Escribe el cargo que ocupa")
  const sobreMi = prompt("Escribe informacion adicional")

  document.getElementById('staff-contenedor').insertAdjacentHTML('beforeend',
  `<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div class="team-item">
      <div class="team-img position-relative overflow-hidden">
          <img class="img-fluid" src="img/Yasuo_36.jpg" alt="">
          <div class="team-social">
              <div id="btnSobreMi">
                  <a class="btn btn-rectangle open-modal"  data-open="modal9">Sobre Mi</a>
                      <div class="modal" id="modal9">
                      <div class="modal-dialog">
                          <header class="modal-header">
                          <button class="close-modal" aria-label="close modal" data-close>✕</button>
                          </header>
                          <section class="modal-content">`+ sobreMi +

                          `</section>
                      </div>
                      </div>
                  </div>
              <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
              <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
          </div>
      </div>
      <div class="bg-secondary text-center p-4">
          <h5 id="titulo9" class="text-uppercase">` + nombre + `</h5>
          <span id="cargo9" class="text-primary">`+ cargo + `</span>
          <div class="admin">
              <button data-id="9">Borrar</button>
              <button id="modificar" onclick="cambiar()">Modificar</button>
          </div>
      </div>
  </div>
</div>`);
}

const popupTexto = document.querySelectorAll('.modificar');


function cambiar(){
  const opcion = prompt("¿Que quieres modificar?")

  if (opcion == 'nombre') {

  const nuevoNombre = prompt("Escriba el nuevo nombre");
  if (nuevoNombre == null || nuevoNombre == " ") {
    alert("Debe introducir texto")
  }else {
  alert("Click al nombre para visualizar cambio");
  for (const el of titulos){
    el.addEventListener("click", function() {
      const titID = this.id;
      document.getElementById(titID).innerHTML = nuevoNombre;
      });
    }
  }
  } else if (opcion == 'cargo') {
    const cargo = prompt("Escriba el nuevo cargo");
    if (cargo == null || cargo == " ") {
      alert("Debe introducir texto");
    }else {
    alert("Click al cargo para visualizar cambio");
    for (const el of cargos){
    el.addEventListener("click", function() {
      const titID = this.id;
      document.getElementById(titID).innerHTML = cargo;
      });
    }
  }
  }else{
    alert("No es una opcion valida")
  }
}