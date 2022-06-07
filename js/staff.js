const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

const contenedor = document.querySelectorAll("[data-id]");
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.getElementById(modalId).style.cursor = 'none';
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
          <h5 class="text-uppercase">` + nombre + `</h5>
          <span class="text-primary">`+ cargo + `</span>
          <div class="admin">
              <button data-id="9">Borrar</button>
          </div>
      </div>
  </div>
</div>`);

atributos();

}

const popupTexto = document.querySelectorAll('.modificar');


for (const el of popupTexto){
  el.addEventListener("click", function() {
    this.parentElement.innerHTML = "HOLA";
  });
}

function atributos (){
  openEls = document.querySelectorAll["[data-open]"];
  contenedor = document.querySelectorAll("[data-id]");
  closeEls = document.querySelectorAll("[data-close]");
}