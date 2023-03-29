import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  valido:any

  constructor(private auth:AutenticacionService){}

  public get logIn():boolean{
    return localStorage.getItem("authToken") !== null
  }

}
