import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  //array que viene del appComponent
  @Input() empleados: Empleado[];

  constructor() { 
    this.empleados = [];
  }

  ngOnInit(): void {
    // para corroborar que me esta llegando el array correpsondiente
    console.log(this.empleados);
  }
  
  ngDoCheck():void{
    // doCheck me sirve ppara chequear cualquier cambio en la estructura de datos esta permanentemente comporbando queel array se modifica y me lanza los cambios
  }

}
