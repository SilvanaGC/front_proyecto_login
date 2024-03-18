document.getElementById("buttonlogin").addEventListener('click',()=>{
  event.preventDefault();
  
  console.log('El botón ha sido clickeado');

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email,password);

// URL a la que se enviará la petición POST
const url = 'https://microservice-production-b78e.up.railway.app/login/access';

// Datos que quieres enviar en el cuerpo de la petición
const data = {
  "emaillUsuario":email,
  "contrasena": password
};

// Opciones de configuración para la petición Fetch
const opciones = {
method: 'POST', // Método de la petición
headers: {
  'Content-Type': 'application/json' // Tipo de contenido que se está enviando
},
body: JSON.stringify(data)
};

// Realizar la petición Fetch
fetch(url, opciones)
.then(response => {
  if (!response.ok) {
    Swal.fire({
      title: '¡No se encuentra registrado!',
      text: '¡Erroneo!',
      icon: 'error',
      confirmButtonText: '¡Entendido!'
    });
    throw new Error('Error en la petición');
  }
  return response.json(); // Convertir la respuesta a JSON
})
.then(information => {
  Swal.fire({
    title: '¡Atención!',
    text: '¡Ingreso exitoso!',
    icon: 'success',
    confirmButtonText: '¡Entendido!'
  });
})
.catch(error => {
  Swal.fire({
    title: '¡No se encuentra registrado!',
    text: '¡Erroneo!',
    icon: 'error',
    confirmButtonText: '¡Entendido!'
  });
  console.error('Error al realizar la petición:', error);
});

})

