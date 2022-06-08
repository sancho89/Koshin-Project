const contenedor = document.querySelectorAll("[data-id]");

for (const el of contenedor){
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.remove();
      alert("ELEMENTO BORRADO");
    });
  }

  