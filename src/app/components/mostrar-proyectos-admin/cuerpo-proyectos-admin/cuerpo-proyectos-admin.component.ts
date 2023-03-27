import { Component, Input } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-cuerpo-proyectos-admin',
  templateUrl: './cuerpo-proyectos-admin.component.html',
  styleUrls: ['./cuerpo-proyectos-admin.component.css'],
})

export class CuerpoProyectosAdminComponent {

  proyecto:Proyectos[] = []
  idEnviar:any


  constructor(private sProyecto:ProyectosService){}

  ngOnInit(): void {
    this.cargarhabilidad();
    console.log(this.proyecto)
  }

  cargarhabilidad(){
    this.sProyecto.lista().subscribe(data => {this.proyecto = data})
  }

  eliminarProyecto(id:any){
    alert("Proyecto Eliminado")
    window.location.reload()
    return this.sProyecto.delete(id).subscribe(data => {}) 
  }

  cargarId(id:any){
    this.idEnviar = id
  }

  dameElDato(){
    return this.idEnviar
  }

}
