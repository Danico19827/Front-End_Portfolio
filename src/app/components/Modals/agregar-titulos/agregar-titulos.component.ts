import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Titulos } from 'src/app/model/titulos';
import { TitulosService } from 'src/app/services/titulos.service';

@Component({
  selector: 'app-agregar-titulos',
  templateUrl: './agregar-titulos.component.html',
  styleUrls: ['./agregar-titulos.component.css']
})
export class AgregarTitulosComponent implements OnInit{

  titulo:Titulos[] = []
  nombreTitulo = new FormControl('', Validators.required)
  descripcionTitulo = new FormControl('', Validators.required)
  checkTitulo = new FormControl('', Validators.required)
  urlTitulo = new FormControl({value:'', disabled:true}, Validators.required)


  constructor(private sTitulo:TitulosService){}

  ngOnInit(): void {
  }

  get nombreTituloN():any{
    return this.nombreTitulo.value
  }

  get descripcionTituloN():any{
    return this.descripcionTitulo.value
  }

  get checkTituloN():any{
    return this.checkTitulo.value
  }

  get urlTituloN():any{
    return this.urlTitulo.value
  }



  crearTitulo(){
  const title = new Titulos(this.nombreTituloN, this.descripcionTituloN, this.urlTituloN, this.checkTituloN)
  this.sTitulo.save(title).subscribe(data => {
  alert("Creado Correctamente")
  window.location.reload()    
  })
  }

  detectar(valor:any){
    if(!valor){
      this.urlTitulo.enable();
    } else {
      this.urlTitulo.disable()
      this.urlTitulo.setValue('')
    }
    
  }
}
