const Empleado = require('../models/Empleado');

// ============================
// OBTENER TODOS LOS EMPLEADOS
// ============================
exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener empleados' });
  }
};

// ============================
// CREAR EMPLEADO
// ============================
exports.crearEmpleado = async (req, res) => {
  try {
    console.log('BODY RECIBIDO:', req.body); // 👈 prueba

    const empleado = new Empleado(req.body);
    await empleado.save();

    res.json({ mensaje: 'Empleado creado', empleado });
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear empleado' });
  }
};

// ============================
// OBTENER EMPLEADO POR ID
// ============================
exports.getEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(400).json({ mensaje: 'ID inválido' });
  }
};

// ============================
// ACTUALIZAR EMPLEADO
// ============================
exports.actualizarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ mensaje: 'Empleado actualizado', empleado });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar empleado' });
  }
};

// ============================
// ELIMINAR EMPLEADO
// ============================
exports.eliminarEmpleado = async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Empleado eliminado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar empleado' });
  }
};
