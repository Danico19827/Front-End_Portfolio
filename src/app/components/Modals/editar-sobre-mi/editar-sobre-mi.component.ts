import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent implements OnInit {

  usuario:Usuario[] = []
  user:Usuario = null
  nombre = new FormControl('Nicolás Daniel Taritolay', Validators.required)
  edad = new FormControl(19, Validators.required)
  descripcion = new FormControl('', Validators.required)
  foto = new FormControl('', Validators.required)
  

  constructor(private sUsuario:UsuarioService){
    
  }

  cargarDatos(id:any){
    this.sUsuario.find(1).subscribe(data =>{
      this.user = data;
      this.nombre.setValue(this.user.nombre)
      this.edad.setValue(this.user.edad)
      this.descripcion.setValue(this.user.descripcion)
    }, err =>{
      alert("Error")
    }
    )
  }

  ngOnInit(): void {
    this.sUsuario.find(1).subscribe(data =>{
      this.user = data;
    }, err =>{
      alert("Error")
    }
    )
  }


  get nombreN():any{
    return this.nombre.value

  }

  get edadN():any{
    return this.edad.value
  }

  get descripcionN():any{
    return this.descripcion.value

  }


  actualizarUsuario(){
    this.user.descripcion= this.descripcionN
    this.user.edad = this.edadN
    this.user.nombre = this.nombreN
    this.sUsuario.update(this.user).subscribe(data => {
      alert("Actualizado Correctamente")
      window.location.reload()
    })
  }
}
