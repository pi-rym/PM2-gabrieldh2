const axios = require('axios')
 
 
 function limpiarFormulario() {
    // Seleccionar todos los inputs del formulario
    const inputs = document.querySelectorAll('input');

    // Iterar sobre los inputs y vaciar sus valores
    inputs.forEach(input => {
        input.value = '';
    });
}




async function manejarEnvioFormulario(event) {
    try {
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

        // Si el formulario está completo, enviar los datos al servidor
        if (formularioCompleto) {
            const title = document.getElementById('title').value;
            const year = document.getElementById('year').value;
            const director = document.getElementById('director').value;
            const duration = document.getElementById('duration').value;
            const genre = document.getElementById('genre').value;
            const rate = document.getElementById('rate').value;
            const poster = document.getElementById('poster').value;

            // Enviar los datos del formulario al servidor utilizando Axios
            const response = await axios.post('http://localhost:3500/movies', {
                title,
                year,
                director,
                duration,
                genre,
                rate,
                poster
            });

            console.log('La película se ha guardado correctamente:', response.data);
            alert('La película se ha guardado correctamente');
        } else {
            console.log('Por favor, completa todos los campos del formulario');
            alert('Por favor, completa todos los campos del formulario');
        }
    } catch (error) {
        console.error('Error al enviar la película:', error);
        alert('Hubo un error al guardar la película. Por favor, inténtalo de nuevo.');
    }
}






module.exports = {
    limpiarFormulario,
    manejarEnvioFormulario
}









