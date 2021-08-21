import { Component } from '@angular/core';
import { Empleado } from './interfaces/empleado.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crmEmpleados';

  arrEmpleados: Empleado[];

  constructor(){
    this.arrEmpleados = [
      {
        nombre: 'Graciela',
        apellidos: 'Barrerira',
        dni: '12987679',
        email: 'lagachi@hotmail.com',
        foto: 'https://randomuser.me/api/portraits/women/2.jpg',
        departamento: 'direccion',
        estado: true,
      },
      {
        nombre: 'Cecilia',
        apellidos: 'Hernando',
        dni: '30495896',
        email: 'ceciliahernando@live.com',
        foto: 'https://randomuser.me/api/portraits/women/38.jpg',
        departamento: 'marketing',
        estado: false,
      }
    ];
  }

  onEmpleadoEnviado(pEmpleado: Empleado){
    this.arrEmpleados.push(pEmpleado);
    console.log(this.arrEmpleados)
  }
}
