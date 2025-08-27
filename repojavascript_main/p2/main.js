const btn2 = document.getElementById("btnActivar");
btn2.disabled = true;
btn2.style.opacity = "0.5";

function manejarClicBoton() {
    const mensaje = document.getElementById("mensajeTexto");
    mensaje.textContent = "Botón clicado";
}

function cambiarColorAlEntrar() {
    this.style.backgroundColor = "orange"
}

function restaurarColorAlSalir() {
    this.style.backgroundColor = "lightblue"
}

function mostrarTecla(event) {
    const texto = document.getElementById("teclaMostrada")
    texto.textContent = "Tecla: " + event.key;
}

let contador = 0

function sumar() {
    contador++;
    document.getElementById("contador").textContent = contador
}

function restar() {
    contador--;
    document.getElementById("contador").textContent = contador
}

function cambiarColorDobleClick() {
    const colores = ["#FFC107", "#03a9f4", "#4caf50", "#e91e63", "#9c27b0"]
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    this.style.backgroundColor = randomColor
}

function validarEmail() {
    const input = document.getElementById("emailInput");
    const mensaje = document.getElementById("mensajeEmail");
    const valor = input.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(valor)) {
        mensaje.textContent = "Email válido✅";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Email inválido❌"
        mensaje.style.color = "red";
    }
}

let segundos = 0;
let intervalId = null;

function iniciarTemporizador() {
    if (intervalId !== null) return;
    intervalId = setInterval(() => {
        segundos++;
        document.getElementById("temporizador").textContent = `${segundos} segundos`;
    }, 1000);
}


function desactivarBoton() {
    const botondesactivado = document.getElementById("btnDesactivado");
    const botonDesactivar = document.getElementById("btnDesactivar");

    botondesactivado.disabled = true;
    botondesactivado.style.opacity = "0.5";

    botonDesactivar.disabled = true;
    botonDesactivar.style.opacity = "0.5";

    btn2.disabled = false;
    btn2.style.opacity = "1";
}

function activarBoton() {
    const btnDesactivado = document.getElementById("btnDesactivado");
    const btnDesactivar = document.getElementById("btnDesactivar");

    btnDesactivado.disabled = false;
    btnDesactivado.style.opacity = "1";

    btnDesactivar.disabled = false;
    btnDesactivar.style.opacity = "1";

    btn2.disabled = true;
    btn2.style.opacity = "0.5";
}

function toggleMostrarCaja() {
    const caja = document.getElementById("toggleCaja");
    if (caja.style.display == "none" || caja.style.display == "") {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    }
}

function cambiarImagenMouseOver() {
    this.src = "futurodos.jpg";
}

function restaurarImagenMouseout() {
    this.src = "futuro.jpg";
}

let timeoutScroll;
function detectarScroll() {
    const mensaje = document.getElementById("mensajeScroll");
    mensaje.style.display = "block";
    clearTimeout(timeoutScroll);
    timeoutScroll = setTimeout(() => {
        mensaje.style.display = "none";
    }, 1000);
}

function focusinput() {
    this.style.borderColor = "#3498db";
    this.style.backgroundColor = "#eaf6ff";
}

function blurInput() {
    this.style.borderColor = "#ccc";
    this.style.backgroundColor = "white";
}

function mostrarSeleccion() {
    const valor = this.value || "ninguno";
    document.getElementById("colorSeleccionado").textContent = `Color seleccionado: ${valor}`;
}

function mostrarTamañoVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    document.getElementById("tamañoVentana").textContent = `Ancho x Alto: ${ancho} x ${alto}`;
}


function validarFormulario(event) {
    event.preventDefault();
    const inputNombre = document.getElementById("nombreForm");
    const mensaje = document.getElementById("mensajeForm");
    if (inputNombre.value.trim() === "") {
        mensaje.textContent = "Por favor ingresa tu nombre";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario enviado con éxito✅";
        mensaje.style.color = "green";
    }
}

//-------------------------------
//Asignación de eventos para cada página
//-------------------------------

document.addEventListener("DOMContentLoaded",() => {
    document.getElementById("botonTexto").addEventListener("click", manejarClicBoton)
})

const cajaColores = document.getElementById("cajaColores");
cajaColores.addEventListener("mouseover", cambiarColorAlEntrar);
cajaColores.addEventListener("mouseout", restaurarColorAlSalir);

document.getElementById("inputTecla").addEventListener("keydown", mostrarTecla);

document.getElementById("btnSumar").addEventListener("click", sumar);
document.getElementById("btnRestar").addEventListener("click", restar);

document.getElementById("seccionDobleClick").addEventListener("dblclick", cambiarColorDobleClick);

document.getElementById("emailInput").addEventListener("input", validarEmail);

document.getElementById("iniciarTemporizador").addEventListener("click", iniciarTemporizador);

document.getElementById("btnDesactivar").addEventListener("click", desactivarBoton);
document.getElementById("btnActivar").addEventListener("click", activarBoton);

document.getElementById("toggleBtn").addEventListener("click", toggleMostrarCaja);

const imagenHover = document.getElementById("imagenHover");
imagenHover.addEventListener("mouseover", cambiarImagenMouseOver);
imagenHover.addEventListener("mouseout", restaurarImagenMouseout);

window.addEventListener("scroll", detectarScroll);

const inputFocusBlur = document.getElementById("inputFocusBlur");
inputFocusBlur.addEventListener("focus", focusinput);
inputFocusBlur.addEventListener("blur", blurInput);

document.getElementById("selectColores").addEventListener("change", mostrarSeleccion);

window.addEventListener("resize", mostrarTamañoVentana);
mostrarTamañoVentana();

document.getElementById("formularioSimple").addEventListener("submit", validarFormulario);
