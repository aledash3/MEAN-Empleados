const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    required: true
  },
  departamento: {
    type: String,
    required: false
  },
  salario: {
    type: Number,
    required: true
  },
  fechaIngreso: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
