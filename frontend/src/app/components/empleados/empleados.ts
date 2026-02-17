import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class EmpleadosComponent implements OnInit {

  empleadoSeleccionado: Empleado = {} as Empleado;
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(data => this.empleados = data);
  }

  guardarEmpleado(): void {

    if (this.empleadoSeleccionado._id) {

      // 🔹 ACTUALIZAR
      this.empleadoService
        .actualizarEmpleado(
          this.empleadoSeleccionado._id,
          this.empleadoSeleccionado
        )
        .subscribe(() => {
          this.cargarEmpleados();
          this.empleadoSeleccionado = {} as Empleado;
        });

    } else {

      // 🔹 CREAR
      this.empleadoService
        .crearEmpleado(this.empleadoSeleccionado)
        .subscribe(() => {
          this.cargarEmpleados();
          this.empleadoSeleccionado = {} as Empleado;
        });

    }
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoSeleccionado = { ...empleado };
  }

  eliminarEmpleado(id: string): void {
    this.empleadoService.eliminarEmpleado(id)
      .subscribe(() => this.cargarEmpleados());
  }
}
