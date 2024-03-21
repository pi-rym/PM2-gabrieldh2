function validarDatos(req, res, next) {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    // Verificar si todos los campos están presentes y no están vacíos
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validar que el año sea un número de 4 dígitos
    if (isNaN(year) || year.length !== 4) {
        return res.status(400).json({ error: 'El año debe ser un número de 4 dígitos.' });
    }

    // Si todas las validaciones pasan, continuar con el siguiente middleware
    next();
}

module.exports = {validarDatos};