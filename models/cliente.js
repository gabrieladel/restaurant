const mongoose = require('mongoose');
/* const Cliente = require('./controllers/clienteController'); */


const ClienteSchema = new mongoose.Schema({
  nombre: String,
  telefono: String/* ,
  platos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plato' }]  */
});

// Crear el modelo
const Cliente = mongoose.model('clientes', ClienteSchema);

module.exports = Cliente;