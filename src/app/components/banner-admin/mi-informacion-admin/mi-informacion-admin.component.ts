import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mi-informacion-admin',
  templateUrl: './mi-informacion-admin.component.html',
  styleUrls: ['./mi-informacion-admin.component.css']
})

export class MiInformacionAdminComponent implements OnInit {

  usuario:Usuario[] = []

  constructor(private sUsuario:UsuarioService){}

  ngOnInit(): void {
    this.cargarUsuario();
    console.log(this.usuario)
  }

  cargarUsuario(){
    this.sUsuario.lista().subscribe(data => {this.usuario = data})
  }

}

