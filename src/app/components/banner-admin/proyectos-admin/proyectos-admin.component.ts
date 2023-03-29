import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-proyectos-admin',
  templateUrl: './proyectos-admin.component.html',
  styleUrls: ['./proyectos-admin.component.css']
})
export class ProyectosAdminComponent {

  constructor(private auth:AutenticacionService){}

  public get logIn():boolean{
    return localStorage.getItem("authToken") !== null
  }

}
