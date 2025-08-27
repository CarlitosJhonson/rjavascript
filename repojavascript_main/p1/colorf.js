const caja = document.getElementById("caja")

caja.addEventListener("mouseover", function(){
    caja.style.backgroundColor = "orange"
});

caja.addEventListener("mouseout", function(){
    caja.style.backgroundColor = "lightblue"
});