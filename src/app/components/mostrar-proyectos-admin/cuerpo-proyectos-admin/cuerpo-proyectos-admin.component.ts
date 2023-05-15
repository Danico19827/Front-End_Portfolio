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
    if(confirm("¿Desea eliminar el siguiente elemento?")){
    this.sProyecto.delete(id).subscribe(data => {})
    alert("Proyecto Eliminado")
    window.location.reload()
    return 0 
    } else {
      return 0
    }
  }

  cargarId(id:any){
    this.idEnviar = id
  }

  dameElDato(){
    return this.idEnviar
  }

}
