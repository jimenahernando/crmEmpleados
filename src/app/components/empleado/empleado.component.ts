import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;
  constructor() { 
    this.empleado = {
      nombre: "",
      apellidos: "",
      dni: "",
      email: "",
      foto: "",
      departamento: "",
      estado: true
    };
  }

  ngOnInit(): void {
    console.log(this.empleado);
  }

}
