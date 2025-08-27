// 1.Seleccionamos el botón
const boton = document.getElementById("miBoton");

//2.Se le agrega un event listener
boton.addEventListener("click", function(){
    document.getElementById("mensaje").textContent = "Has hecho click";
});