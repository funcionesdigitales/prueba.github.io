import smtplib


#input.route('index.html', methods=['POST'])
# def signup():
#    nombre = request.form['nombre']
#    asunto = request.form['asunto']
#    mensaje = request.form['mensaje']
#    email = request.form['email']
#    phone = request.form['phone']
#    print(message)
#    return redirect('/')


message = 'Mensaje desde Python'  # Contenido del mensaje
subject = 'Contacto - Funciones Digitales'  # Asunto del mensaje


message = 'Subject: {}\n\n{}'.format(subject, message)

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login('claudioincerti@gmail.com', 'Vale1976@cii20_20')

server.sendmail('', 'claudioincerti@gmail.com', message)

server.quit()

print("Correo enviado exitosamente")
