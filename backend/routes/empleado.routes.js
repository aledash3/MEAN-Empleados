const express = require('express');
const router = express.Router();

const empleadoCtrl = require('../controllers/empleado.controller');

// RUTAS
router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.crearEmpleado);
router.get('/:id', empleadoCtrl.getEmpleado);
router.put('/:id', empleadoCtrl.actualizarEmpleado);
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;
