const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// ============================
// MIDDLEWARES
// ============================
app.use(cors());
app.use(express.json());

// ============================
// RUTA DE PRUEBA
// ============================
app.get('/', (req, res) => {
  res.send('Backend MEAN funcionando correctamente');
});

module.exports = app;
// ============================
// CONEXIÓN A MONGODB
// ============================
mongoose.connect('mongodb://127.0.0.1:27017/mean-empleados')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error MongoDB:', err));

const empleadoRoutes = require('./routes/empleado.routes');
app.use('/api/empleados', empleadoRoutes);
