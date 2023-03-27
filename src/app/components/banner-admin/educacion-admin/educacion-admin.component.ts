import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion-admin',
  templateUrl: './educacion-admin.component.html',
  styleUrls: ['./educacion-admin.component.css']
})
export class EducacionAdminComponent {

  edu:Educacion[] = []
  idEnviar:any

  constructor(private sEducacion:EducacionService){}

  ngOnInit(): void {
    this.cargarEducacion();
    console.log(this.edu)
  }

  cargarEducacion(){
    this.sEducacion.lista().subscribe(data => {this.edu = data})
  }

  eliminarEducacion(id:any){
    alert("Educacion Eliminada")
    window.location.reload()
    return this.sEducacion.delete(id).subscribe(data => {}) 
  }

  cargarId(id:any){
    this.idEnviar = id
  }

  dameElDato(){
    return this.idEnviar
  }

}
