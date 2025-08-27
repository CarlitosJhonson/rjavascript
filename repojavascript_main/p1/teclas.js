const input = document.getElementById("inputTexto");

input.addEventListener("keydown", function(evento){
    document.getElementById("tecla").textContent = "Tecla presionada: " + evento.key;
});