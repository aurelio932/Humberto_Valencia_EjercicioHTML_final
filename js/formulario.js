const formulario = document.querySelector('.formulario form');

formulario.addEventListener('submit', function (e) {
    if (!formulario.checkValidity()) {
        e.preventDefault();
        // Aquí podrías recorrer los campos inválidos y mostrar mensajes personalizados
        const invalidos = formulario.querySelectorAll(':invalid');
        invalidos.forEach(campo => {
            campo.classList.add('campo-error');
        });
    }
});