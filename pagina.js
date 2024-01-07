// Lista de imágenes
var id = ["C001", "C002", "C003", "C004", "C005", "C006", "C007", "C008", "C009", "C010", "C011", "C012", 
"C013", "C014", "C015", "C016", "C017", "C018", "C019", "C020", "C021", "C022", "C023", "C024", 
"C025", "C026", "C027", "C028", "C029", "C030"];

// Dividir las imágenes en grupos de 20
var grupos = [];
for (var i = 0; i < id.length; i += 20) {
  grupos.push(imagenes.slice(i, i + 20));
}

// Mostrar cada grupo de imágenes en una página separada
for (var j = 0; j < grupos.length; j++) {
  var pagina = document.createElement("div");
  pagina.classList.add("pagina");

  for (var k = 0; k < grupos[j].length; k++) {
    var id = document.createElement("img");
    imagen.src = grupos[j][k];
    pagina.appendChild(imagen);
  }

  document.body.appendChild(pagina);
}