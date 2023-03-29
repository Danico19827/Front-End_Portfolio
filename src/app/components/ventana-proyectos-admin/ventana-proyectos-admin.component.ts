import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-ventana-proyectos-admin',
  templateUrl: './ventana-proyectos-admin.component.html',
  styleUrls: ['./ventana-proyectos-admin.component.css']
})
export class VentanaProyectosAdminComponent {

constructor(private auth:AutenticacionService){}

  public get logIn():boolean{
    return localStorage.getItem("authToken") !== null
  }

}
