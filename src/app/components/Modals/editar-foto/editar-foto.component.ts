import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-foto',
  templateUrl: './editar-foto.component.html',
  styleUrls: ['./editar-foto.component.css']
})
export class EditarFotoComponent {
  
  usuario:Usuario[] = []
  user:Usuario
  foto = new FormControl(null, Validators.required)

  constructor(private sUsuario:UsuarioService){}

  ngOnInit(): void {
    this.sUsuario.find(1).subscribe(data =>{
      this.user = data;
    }, err =>{
      alert("Error")
    }
    )
  }

  get fotoN():any{
    return this.foto.value
  }

  actualizarUsuario(){
    if(this.foto.value != null){
      this.user.url = this.fotoN
      this.sUsuario.update(this.user).subscribe(data => {})
      window.location.reload()
    } else {
      this.user.url = "../assets/img/Foto de Perfil.jpeg"
      this.sUsuario.update(this.user).subscribe(data => {})
      window.location.reload()
    }
    
}

}
