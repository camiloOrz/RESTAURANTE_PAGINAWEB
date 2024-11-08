document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.ordenar');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Captura el plato correspondiente a este botón
            const plato = this.closest('tr');
            const nombre = plato.querySelector('.nombre').textContent;
            const imagen = plato.querySelector('img').src;

            // Crea un objeto del plato
            const platoObj = {
                nombre: nombre,
                imagen: imagen
            };

            // Verifica si hay algo ya en el localStorage
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Añade el nuevo plato al carrito
            carrito.push(platoObj);

            // Guarda el carrito actualizado en el localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Redirige a la página del carrito
            window.location.href = 'carrito.html'; // Cambia a la URL de tu página de carrito
        });
    });
});
