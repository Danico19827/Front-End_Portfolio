import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent {

  checkValor:any
  nombreEducacion = new FormControl('', Validators.required)
  descripcionEducacion = new FormControl('', Validators.required)
  checkEducacion = new FormControl('', Validators.required)
  enlaceEducacion = new FormControl({value:'', disabled:true}, Validators.required)

  constructor(private sEducacion:EducacionService){}

  ngOnInit(): void {
  }

  get nombreN():any{
    return this.nombreEducacion.value

  }

  get checkN():any{
    if(this.checkEducacion.value.length != 0){
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

  crearEducacion(){
    const edu = new Educacion(this.nombreN, this.descripcionN, this.checkN, this.enlaceN)
    this.sEducacion.save(edu).subscribe(data => {
    alert("Creado Correctamente")
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
