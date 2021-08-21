import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadoComponent } from '../empleado/empleado.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() empleadoAgregado: EventEmitter<Empleado>;

  constructor() { 
    this.empleadoAgregado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  recogerDatos(pForm: any){
    pForm.value.estado = true;
    this.empleadoAgregado.emit(pForm.value);
    pForm.resetForm({});
  }
}
