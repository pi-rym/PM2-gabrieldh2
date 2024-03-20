 function limpiarFormulario() {
    // Seleccionar todos los inputs del formulario
    const inputs = document.querySelectorAll('input');

    // Iterar sobre los inputs y vaciar sus valores
    inputs.forEach(input => {
        input.value = '';
    });
}




 function manejarEnvioFormulario(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Seleccionar todos los inputs del formulario
    const inputs = document.querySelectorAll('input');

    // Validar que todos los campos estén completos
    let formularioCompleto = true;
    inputs.forEach(input => {
        if (!input.value) {
            formularioCompleto = false;
        }
    });

    // Si el formulario está completo, mostrar un mensaje
    if (formularioCompleto) {
        console.log('Formulario enviado correctamente');
        // Aquí podrías enviar los datos del formulario al servidor
    } else {
        console.log('Por favor, completa todos los campos del formulario');
        alert('Por favor, completa todos los campos del formulario')
    }
}


const clearButton = document.getElementById('clearButton')

clearButton.addEventListener('click',limpiarFormulario)








const form = document.getElementById('formularioPelicula')

form.addEventListener('submit', manejarEnvioFormulario)






// module.exports = {
//     limpiarFormulario,
//     manejarEnvioFormulario
// }