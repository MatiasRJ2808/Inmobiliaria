function guardarInformacion() {
       
    var Nombre = document.getElementById('Nombre').value;
    var Apellido = document.getElementById('Apellido').value;
    var Genero = document.getElementById('Genero').value;
    var Correo = document.getElementById('Correo').value;
    var Contraseña = document.getElementById('Contraseña').value;

    var informacion = {
        Nombre: Nombre,
        Apellido: Apellido,
        Genero: Genero,
        Correo: Correo,
        Contraseña: Contraseña
    }

    localStorage.setItem('informacionFormulario', informacionJSON);

    alert('Información guardada con éxito.');
}