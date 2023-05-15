import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent {

  proyecto:Proyectos[] = []
  nombreProyecto = new FormControl('', Validators.required)
  descripcionProyecto = new FormControl('', Validators.required)
  razonProyecto = new FormControl('', Validators.required)
  urlProyecto = new FormControl('', Validators.required)

  constructor(private sProyecto:ProyectosService){}

  ngOnInit(): void {
  }

  

  get descripcionProyectoN():any{
    if(this.descripcionProyecto.value != null){
      return this.descripcionProyecto.value
    } else{
      return "Sin descripción"
    }
  }

  get nombreProyectoN():any{
      if(this.nombreProyecto.value != null){
        return this.nombreProyecto.value
      } else{
        return "Sin nombreProyecto"
      }
    }
  get razonProyectoN():any{
    if(this.razonProyecto.value != null){
      return this.razonProyecto.value
    } else{
      return "Sin descripción"
    }
  }

  get urlProyectoN():any{
    if(this.urlProyecto.value != null){
      return this.urlProyecto.value
    } else{
      return "Sin descripción"
    }
  }



  crearProyecto(){
  const proyect = new Proyectos(this.nombreProyectoN, this.descripcionProyectoN, this.razonProyectoN, this.urlProyectoN)
  this.sProyecto.save(proyect).subscribe(data => {
  alert("Creado Correctamente")
  window.location.reload()    
  })
  }
}
