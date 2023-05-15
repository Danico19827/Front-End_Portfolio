import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent {
  @Input() Id:any
  educ:Educacion = null
  checkValor:any
  nombreEducacion = new FormControl('', Validators.required)
  descripcionEducacion = new FormControl('', Validators.required)
  checkEducacion = new FormControl(false, Validators.required)
  enlaceEducacion = new FormControl({value:'', disabled:true}, Validators.required)

constructor(private sEducacion:EducacionService){}

  ngOnInit(): void {
  }

  cargarDatos(id:any){
    this.sEducacion.find(id).subscribe(data =>{
      this.educ = data;
      this.nombreEducacion.setValue(this.educ.tipoEducacion)
      this.descripcionEducacion.setValue(this.educ.descripcion)
      this.checkEducacion.setValue(this.educ.tieneLogo)
      this.enlaceEducacion.setValue(this.educ.logo)
      if(this.checkEducacion.value){
        this.enlaceEducacion.enable()
      } else {
        this.enlaceEducacion.disable()
      }
    }, err =>{
      alert("Error")
    }
    )
  }

  get nombreN():any{
    return this.nombreEducacion.value

  }

  get checkN():any{
    if(this.checkEducacion.value){
      this.checkValor = this.checkEducacion.value
      return this.checkValor
     } else {
      this.checkValor = false
      return this.checkValor
     }
  }

  get descripcionN():any{
    return this.descripcionEducacion.value

  }

  get enlaceN():any{
    return this.enlaceEducacion.value
  }

  buscarId (id:any){
    this.sEducacion.find(id).subscribe(data =>{
      this.educ = data;
      this.actualizarEducacion()
    }, err =>{
      alert("Error")
    }
    )
  }

  actualizarEducacion(){
    this.educ.descripcion= this.descripcionN
    this.educ.tipoEducacion = this.nombreN
    this.educ.tieneLogo = this.checkN
    this.educ.logo = this.enlaceN
    this.sEducacion.update(this.educ).subscribe(data => {
      alert("Actualizado Correctamente")
      window.location.reload()  
    })
    
  }

  detectar(valor:any){
    if(!valor){
      this.enlaceEducacion.enable();
    } else {
      this.enlaceEducacion.disable()
      this.enlaceEducacion.setValue('')
    }
    
  }

}
