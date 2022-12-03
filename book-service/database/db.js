const mongoose = require('mongoose');

/**
 * Conexión a la BD
 */
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.db_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión con la base de datos establecida')
  } catch (error) {
    console.log(error);
    process.exit; // Para la ejecución
  }
}

module.exports = { dbConnection }