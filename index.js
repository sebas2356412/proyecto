console.log("Chemsi cargado correctamente 🐾");

// Función para mostrar alerta al agregar producto
document.addEventListener("click", e => {
    if (e.target.classList.contains("btn")) {
        alert("Producto agregado al carrito 🛒");
    }
});