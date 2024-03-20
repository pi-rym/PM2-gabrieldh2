const mongoose = require('mongoose')


async function connectionDb(){
    try {
        const url = 'mongodb+srv://gabrieldavidhuertas:5Y5OUdhqyqlX7yzc@cluster0.5efimoz.mongodb.net/Practices_1?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
        console.log('Conexión exitosa a la base de datos MongoDB.');
      } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
      }
}


module.exports = connectionDb