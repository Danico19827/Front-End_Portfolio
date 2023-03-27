import { Component , OnInit } from '@angular/core';
//import { PersonaService } from 'src/app/services/persona.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mi-informacion',
  templateUrl: './mi-informacion.component.html',
  styleUrls: ['./mi-informacion.component.css']
})
export class MiInformacionComponent implements OnInit{

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