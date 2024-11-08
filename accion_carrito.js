document.addEventListener('DOMContentLoaded', function() {
    const tablaCarrito = document.querySelector('#tabla-carrito tbody');

    // Obtener los datos del carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Recorrer los platos del carrito y añadirlos a la tabla
    carrito.forEach(plato => {
        const fila = document.createElement('tr');

        // Columna de imagen
        const celdaImagen = document.createElement('td');
        const imagen = document.createElement('img');
        imagen.src = plato.imagen;
        imagen.width = 100; // Ajusta el tamaño de la imagen si es necesario
        celdaImagen.appendChild(imagen);

        // Columna de nombre
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = plato.nombre;

        // Añadir celdas a la fila
        fila.appendChild(celdaImagen);
        fila.appendChild(celdaNombre);

        // Añadir la fila a la tabla
        tablaCarrito.appendChild(fila);
    });
});
