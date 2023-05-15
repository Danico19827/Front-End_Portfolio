import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Titulos } from 'src/app/model/titulos';
import { TitulosService } from 'src/app/services/titulos.service';

@Component({
  selector: 'app-editar-titulo',
  templateUrl: './editar-titulo.component.html',
  styleUrls: ['./editar-titulo.component.css']
})
export class EditarTituloComponent implements OnInit {
  @Input() Id:any
  titulo:Titulos = null
  checkValor:any
  nombreTitulo = new FormControl('', Validators.required)
  descripcionTitulo = new FormControl('', Validators.required)
  checkTitulo = new FormControl(false, Validators.required)
  urlTitulo = new FormControl({value:'', disabled:true}, Validators.required)

  constructor(private sTitulos:TitulosService){}

  ngOnInit(): void {
  }

  cargarDatos(id:any){
    this.sTitulos.find(id).subscribe(data =>{
      this.titulo = data;
      this.nombreTitulo.setValue(this.titulo.nombre)
      this.descripcionTitulo.setValue(this.titulo.descripcion)
      this.checkTitulo.setValue(this.titulo.tieneUrl)
      this.urlTitulo.setValue(this.titulo.url)
      if(this.checkTitulo.value){
        this.urlTitulo.enable()
      } else {
        this.urlTitulo.disable()
      }
    }, err =>{
      alert("Error")
    }
    )
  }

  buscarId (id:any){
    this.sTitulos.find(id).subscribe(data =>{
      this.titulo = data;
      this.actualizarUsuario()
    }, err =>{
      alert("Error")
    }
    )
  }

  get descripcionN(){
    return this.descripcionTitulo.value
  }

  get nombreN(){
    return this.nombreTitulo.value
  }

  get urlTituloN():any{
    return this.urlTitulo.value
  }

  get checkTituloN():any{
   if(this.checkTitulo.value){
    this.checkValor = this.checkTitulo.value
    return this.checkValor
   } else {
    this.checkValor = false
    return this.checkValor
   }
  }


  actualizarUsuario(){
    this.titulo.descripcion= this.descripcionN
    this.titulo.nombre = this.nombreN
    this.titulo.tieneUrl = this.checkTituloN
    this.titulo.url = this.urlTituloN
    this.sTitulos.update(this.titulo).subscribe(data => {
      alert("Actualizado Correctamente")
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
