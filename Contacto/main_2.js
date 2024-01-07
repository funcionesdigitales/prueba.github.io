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
        form.reset();
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




})

//envio informacion Email
sendEmail(nombre, email, mensaje);
{
    Email.send({
        Host: "stmp.gmail.com",
        Username: "claudioincerti@Gmail.com",
        //Password: "#$%@!#$#",
        //To: "claudioincerti@Gmail.com",
        //From: "claudioincerti@Gmail.com",
        Subject: '${nombre} Envia tu mensaje',
        Body: 'Nombre: ${nombre} <br/> Email: ${email} <br/> Mensaje: ${mensaje}',
    }).then((mensaje) => alert("Mensaje enviado correctamente"));
};
}

/*-----Popup close-----*/

function Close_popup() {
    document.getElementById("popup").style.display = "none";
}