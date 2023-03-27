import { Component } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-cuerpo-proyectos',
  templateUrl: './cuerpo-proyectos.component.html',
  styleUrls: ['./cuerpo-proyectos.component.css']
})
export class CuerpoProyectosComponent {

  proyecto:Proyectos[] = []

  constructor(private sProyecto:ProyectosService){}

  ngOnInit(): void {
    this.cargarhabilidad();
    console.log(this.proyecto)
  }

  cargarhabilidad(){
    this.sProyecto.lista().subscribe(data => {this.proyecto = data})
  }

}
