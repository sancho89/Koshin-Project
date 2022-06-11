// Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaArticulos = document.querySelector('#lista-articulos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {

    // Agregas artículo al carrito
    listaArticulos.addEventListener('click', agregarArticulo);

    // Eliminas el artículo del carrito
    carrito.addEventListener('click', eliminarArticulo);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    })
}

// Funciones
function agregarArticulo(e) {
    e.preventDefault();


    if (e.target.classList.contains('agregar-carrito')) {
        const articuloSeleccionado = e.target.parentElement.parentElement;

        leerDatosArticulo(articuloSeleccionado);

    }

}

// Elimina el articulo del carrito
function eliminarArticulo(e) {

    if (e.target.classList.contains('borrar-articulo')) {
        const articuloId = e.target.getAttribute('data-id');

        // Eliminar del array por data-id
        articulosCarrito = articulosCarrito.filter(articulo => articulo.id !== articuloId);

        console.log(articulosCarrito);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido de cada artículo para poder sacar toda la información como el precio o el nombre del artículo
function leerDatosArticulo(articulo) {
    console.log(articulo);

    // Creamos un objeto con el contenido que ha extraído del artículo
    const infoArticulo = {
        imagen: articulo.querySelector('img').src,
        nombre: articulo.querySelector('h3').textContent,
        precio: articulo.querySelector('span').textContent,
        id: articulo.querySelector('i').getAttribute('data-id'),
        cantidad: 1
    }

    // Comprobar si existe un artículo en el carrito
    const existe = articulosCarrito.some(articulo => articulo.id === infoArticulo.id);
    if (existe) {
        // Actualizamos la cantidad
        const articulos = articulosCarrito.map(articulo => {
            if (articulo.id === infoArticulo.id) {
                articulo.cantidad++;
                return articulo;
            } else {
                return articulo;
            }
        });
        articulosCarrito = [...articulos];
    } else {
        // Agregar articulos al array
        articulosCarrito = [...articulosCarrito, infoArticulo];
    }



    console.log(articulosCarrito);

    carritoHTML();
}


// Mostrar el carrito
function carritoHTML() {

    // LImpiar el HTML
    limpiarHTML();


    //Recorrer el array de carrito y generar HTML
    articulosCarrito.forEach(articulo => {
        const { imagen, nombre, precio, cantidad, id } = articulo;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${articulo.imagen}" width="100">
            </td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-articulo" data-id="${id}" > x </a>
            </td>
        `;

        // Agregar el HTML al tbody
        contenedorCarrito.appendChild(row);
    })
}

// Elimina los articulos del tbody
function limpiarHTML() {

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

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

// Modo admin

// Añadir Artículo
document.querySelector('#añadirArticulo').onclick = () => {

    const nombreArticulo = prompt("Indica el nombre")
    const precio = prompt("Indica el precio")
    
  
    document.getElementById('lista-articulos').insertAdjacentHTML('beforeend',
    `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
        <div class="d-flex flex-shrink-0 align-items-center justify-content-center"
            style="width: 180px; height: 180px;">
            <img class="img-fluid" src="img/ahri">
        </div>
        <div class="ps-4">
            <h3 class="text-uppercase mb-3">` + nombreArticulo + `</h3>
            <span class="text-uppercase text-primary">` + precio + `</span><br><br>
            <input type="button" value="Eliminar Articulo">    
        </div>     
        <a class="btn btn-square" href="#"><i class="fa fa-plus text-primary button input agregar-carrito" data-id="1"></i></a>
    </div>
</div>`);
  }

// Eliminar
const articulo = document.querySelectorAll("input");

for (const art of articulo) {
    art.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.remove();
        // alert("ARTÍCULO BORRADO");
    });

    
}