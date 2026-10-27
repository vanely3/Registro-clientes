 const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
console.log(nombre);
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista");
const boton = document.getElementById("boton");

boton.addEventListener("click", function(event) {
    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los datos escritos
    const nombreCliente = nombre.value;
    console.log(nombreCliente);
    const telefonoCliente = telefono.value.trim();
    console.log(telefonoCliente);

    // Comprobar que haya un nombre
    console.log(nombreCliente);
    if (nombreCliente === "") {
        mensaje.textContent = "Escribe el nombre del cliente.";
        return;
    }

    // Crear un nuevo elemento de la lista
    const cliente = document.createElement("li");

    // Mostrar el nombre y el teléfono
    cliente.textContent = nombreCliente;
    console.log(typeof telefonoCliente);
    if (telefonoCliente !== "") {
        cliente.textContent += " - Teléfono: " + telefonoCliente;
    }

    // Crear el botón para eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.type = "button";

    // Eliminar el cliente al pulsar el botón
    botonEliminar.addEventListener("click", function() {
        cliente.remove();
        mensaje.textContent = "Cliente eliminado.";
    });

    // Agregar el botón al cliente
    cliente.appendChild(botonEliminar);

    // Agregar el cliente a la lista
    lista.appendChild(cliente);

    // Mostrar mensaje de confirmación
    mensaje.textContent = "¡Cliente registrado correctamente!";

    // Limpiar los campos del formulario
    formulario.reset();

    // Colocar el cursor en el campo nombre
    nombre.focus();
});

const asi = "dewd"
let asi2 = "sss"
var asi3 = "sasasa"