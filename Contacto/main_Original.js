function submit(e) {
    e.preventDefault();


    //Valores de entrada
    let nombre = document.querySelector(".nombre").value;
    let asunto = document.querySelector(".asunto").value;
    let mensaje = document.querySelector(".mensaje").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;

    saveContactinfo(nombre, asunto, mensaje, email, phone);

    document.querySelector("contact-form").reset();

    // Funciones de éxito y error para después de que se envía el formulario
    function success() {
        status.classList.add("success");
        status.innerHTML = "Mensaje recibido, Gracias.";
    }
    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! Hay un Problema.";
    }
    //---//

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });

    //obtenga los elementos del formulario definidos en su formulario HTML arriba
    var form = document.getElementById("my-form");

    Email.send({
        Host: "smtp.gmail.com",
        Username: "claudioincerti@gmail.com",
        Password: "Vale1976@cii20_20",
        To: 'receiver@email_address.com',
        From: "claudioincerti@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (_message) {
            alert("Correo enviado con exito.")
        });
}

