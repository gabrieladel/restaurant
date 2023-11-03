const mongoose = require('mongoose');
/* const Plato = require('./models/plato'); */


const platoSchema = new mongoose.Schema({
  nombre:  String,
  descripcion: String,
  precio: String,
  calorias: String,
  ingredientes: String,
  apto: String,
  imagen: String,
  /* solicitudes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Solicitud' }],
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' } */
});

// Crear el modelo
const Plato = mongoose.model('Plato', platoSchema);

module.exports = Plato;