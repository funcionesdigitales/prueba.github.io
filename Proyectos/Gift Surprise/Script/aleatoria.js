window.onload = inicio;
var imagenes = ["001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png"];

function inicio() {
    if (orden.length == imagenes.length) {
        orden = [];
        document.getElementById("#elementos").innerHTML = "";
        document.getElementById().disabled = true;
    }
    do {
        r = Math.floor(Math.random() * cantidad);
    } while (orden.indexOf(r) >= 0)
    orden.push(r);
    document.getElementById("#elementos").innerHTML += `<div><img src="galeria/Promo01/${imagenes[r]}</div>`;

    if (orden.length == imagenes.length) {
        document.getElementById().disabled = false;
    }
}