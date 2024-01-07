<?php
//destinatario
$detinatario = 'claudioincerti@gmail.com';
$nombre = $_POST ['nombre'];
$asunto = $_POST ['asunto'];
$mensaje = $_POST ['mensaje'];
$email = $_POST ['email'];
$phone = $_POST ['phone'];

//mensaje de asunto que llega al correo
$header = "Enviado desde la pagina de Funciones Digitales";
$mensajeCompleto = $mensaje . "\nAtentamente:" . $nombre;

mail($detinatario, $asunto, $mensajeCompleto, $header);
echo "<script> Alert('correo enviado exitosamnete')</script>";
echo "<script> settimeout(\"location.href='index.html'\",1000) </script>";
?>