import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidades-admin',
  templateUrl: './habilidades-admin.component.html',
  styleUrls: ['./habilidades-admin.component.css']
})
export class HabilidadesAdminComponent implements OnInit {

  habilidad:Habilidades[] = []
  idEnviar:any

  constructor(private sHabilidades:HabilidadesService){}

  ngOnInit(): void {
    this.cargarhabilidad();
    console.log(this.habilidad)
  }

  cargarhabilidad(){
    this.sHabilidades.lista().subscribe(data => {this.habilidad = data})
  }

  eliminarHabilidad(id:any){
    alert("Habilidad Eliminada")
    window.location.reload()
    return this.sHabilidades.delete(id).subscribe(data => {}) 
  }

  cargarId(id:any){
    this.idEnviar = id
  }

  dameElDato(){
    return this.idEnviar
  }

}
