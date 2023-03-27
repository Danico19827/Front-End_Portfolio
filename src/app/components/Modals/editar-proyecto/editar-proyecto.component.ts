import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent {

  @Input() Id:any
  proyect:Proyectos = null
  nombreProyecto = new FormControl('', Validators.required)
  razonProyecto = new FormControl('', Validators.required)
  descripcionProyecto = new FormControl('', Validators.required)
  enlaceProyecto = new FormControl('', Validators.required)

  constructor(private sProyectos:ProyectosService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
  }

  get nombreN():any{
    return this.nombreProyecto.value

  }

  get razonN():any{
    return this.razonProyecto.value
  }

  get descripcionN():any{
    return this.descripcionProyecto.value

  }

  get enlaceN():any{
    return this.enlaceProyecto.value
  }

  buscarId (id:any){
    this.sProyectos.find(id).subscribe(data =>{
      this.proyect = data;
      this.actualizarUsuario()
    }, err =>{
      alert("Error")
    }
    )
  }

  actualizarUsuario(){
    this.proyect.descripcion= this.descripcionN
    this.proyect.razon = this.razonN
    this.proyect.nombre = this.nombreN
    this.proyect.url = this.enlaceN
    this.sProyectos.update(this.proyect).subscribe(data => {
  })
  window.location.reload()
}

}
