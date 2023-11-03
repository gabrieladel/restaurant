const mongoose = require('mongoose');
/* const Solicitud = require('./models/solicitud');  */
const SolicitudSchema = new mongoose.Schema({
  fecha: Date,
  detalle: String,
  platoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plato' },
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }
});

// Crear el modelo
const Solicitud = mongoose.model('solicitudes', SolicitudSchema);

module.exports = Solicitud;