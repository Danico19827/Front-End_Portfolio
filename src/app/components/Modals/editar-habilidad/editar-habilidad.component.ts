import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent {
  @Input() Id:any
  hab:Habilidades = null
  nombreHabilidad = new FormControl('', Validators.required)
  porcentajeHabilidad = new FormControl(1, [Validators.required, Validators.min(1),Validators.max(100)])

  constructor(private sHabilidades:HabilidadesService){}

  cargarDatos(id:any){
    this.sHabilidades.find(id).subscribe(data =>{
      this.hab = data;
      this.nombreHabilidad.setValue(this.hab.habilidad)
      this.porcentajeHabilidad.setValue(this.hab.porcentaje)
    }, err =>{
      alert("Error")
    }
    )
  }

  get habilidadN(){
    return this.nombreHabilidad.value
  }
  get porcentajeN(){
    return this.porcentajeHabilidad.value
  }

  buscarId (id:any){
    this.sHabilidades.find(id).subscribe(data =>{
      this.hab = data;
      this.actualizarUsuario()
    }, err =>{
      alert("Error")
    }
    )
  }

  actualizarUsuario(){
    this.hab.habilidad= this.habilidadN
    this.hab.porcentaje= this.porcentajeN
    this.sHabilidades.update(this.hab).subscribe(data => {
      alert("Actualizado Correctamente")
      window.location.reload()  
  })
}
}
