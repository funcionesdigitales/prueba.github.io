// llamo al ID=mail, realice el evento de click
document.getElementById('mail').addEventListener('click', function (e) {
    //ejecuta el evento e el cual es redireccionar al href
    e.preventDefault();
    location.href = "mailto:claudioincerti@gmail.com?subject=FuncionesDigitales%20-%20Información&body=Hola,%20deseo%20más%20información.%20 %20Gracias.";
    // alert("Le has dado click");
});

ScrollReveal().reveal('.logoauto', { delay: 1000 });
ScrollReveal().reveal('.logohouse', { delay: 1300 });
ScrollReveal().reveal('.logodiseno', { delay: 1800 });
ScrollReveal().reveal('.carpinteria', { delay: 2000 });
ScrollReveal().reveal('.sorpresa', { delay: 2300 });
