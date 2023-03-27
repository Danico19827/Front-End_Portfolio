import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent  implements OnInit{

  habilidad:Habilidades[] = []
  habilidades = new FormControl('', Validators.required)
  porcentajes= new FormControl(1, [Validators.required, Validators.min(1), Validators.max(100)])

  

  constructor(private sHabilidades:HabilidadesService, private formBuilder:FormBuilder){
    
  }

  ngOnInit(): void {
  }

  get habilidadN():any{
    if(this.habilidades.value != null){
      return this.habilidades.value
    } else{
      return "Sin nombre"
    }
  }

  get porcentajeN():any{
    if(this.porcentajes.value != null){
      return this.porcentajes.value
    } else{
      return 0;
    }
  }


  crearHabilidades(){
  const hab = new Habilidades(this.habilidadN, this.porcentajeN)
  this.sHabilidades.save(hab).subscribe(data => {})
  alert("Creado Correctamente")
  window.location.reload()
  }

}
