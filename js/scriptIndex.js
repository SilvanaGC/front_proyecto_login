document.getElementById("buttonRegister").addEventListener('click',()=>{

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const typeuser = document.getElementById("typeUser").value;
    console.log(username,email,password,typeuser);
    if(username == "" || email==""|| password=="" || typeuser=="") {
      Swal.fire({
        title: '¡Campos vacios!',
        text: '¡Erroneo!',
        icon: 'error',
        confirmButtonText: '¡Entendido!'
      });
    }else{
      // URL a la que se enviará la petición POST
const url = 'http://localhost:8090/login/';

// Datos que quieres enviar en el cuerpo de la petición
const data = {
    "emaillUsuario":email,
    "nombreUsuario": username,
    "contrasena": password,
    "tipoUsuario": typeuser
};

// Opciones de configuración para la petición Fetch
const opciones = {
  method: 'POST', // Método de la petición
  headers: {
    'Content-Type': 'application/json' // Tipo de contenido que se está enviando
  },
  body: JSON.stringify(data) // Convertir los datos a formato JSON
};

// Realizar la petición Fetch
fetch(url, opciones)
  .then(response => {
    if (!response.ok) {
      Swal.fire({
        title: '¡Error al crear!',
        text: '¡Erroneo!',
        icon: 'error',
        confirmButtonText: '¡Entendido!'
      });
      //throw new Error('Error en la petición');
    }
    return response.json(); // Convertir la respuesta a JSON
  })
  .then(information => {
    console.log('Respuesta recibida:', information);
    Swal.fire({
      title: '¡Usuario creado!',
      text: '¡exitoso!',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    });
    // Redirigir a la otra página después de 5 segundos
    setTimeout(function() {
      window.location.href = "/login.html";
  }, 5000); // 5000 milisegundos = 5 segundos
  })
  .catch(error => {
    Swal.fire({
      title: '¡Error al crear!',
      text: '¡Erroneo!',
      icon: 'error',
      confirmButtonText: '¡Entendido!'
    });
    //console.error('Error al realizar la petición:', error);
  });
    }

})

