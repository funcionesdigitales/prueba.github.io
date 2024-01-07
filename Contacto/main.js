function submit(e) {
    e.preventDefault();

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
        var form = new form(form);
        alert(success, error);

        then(function (message) {
            message.alert(success, error)
        });

    });

    //Email.send({
    //    Host: "smtp.gmail.com",
    //     Username: "claudioincerti@gmail.com",
    //     Password: "Vale1976@cii20_20",
    //     To: 'receiver@email_address.com',
    //     From: "claudioincerti@gmail.com",
    //      Subject: "Sending Email using javascript",
    //      Body: "Well that was easy!!",
    //  })
    //     .then(function (_message) {
    //          alert("Correo enviado con exito.")
    //     });
}

