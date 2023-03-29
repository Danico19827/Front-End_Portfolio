import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Autenticacion } from 'src/app/model/autenticar';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user = new FormControl('', Validators.required)
  password = new FormControl('', Validators.required)
  userEnviar:Autenticacion
  userConfirmar:Autenticacion
  valor:any = false


  constructor(private sAuth:AutenticacionService, private router:Router, private aR:ActivatedRoute){} 

  cargarDatos (){
    this.sAuth.find(1).subscribe(data =>{
      this.userConfirmar = data;
    }, err =>{
      alert("Error")
    }
    )
    this.sAuth.find(2).subscribe(data =>{
      this.userEnviar = data;
      this.enviarParaVerificar()
    }, err =>{
      alert("Error")
    }
    )
  }

  enviarParaVerificar(){
        this.userEnviar.user= this.user.value
        this.userEnviar.password= this.password.value
        this.sAuth.update(this.userEnviar).subscribe(data => {
      })
      if((this.userConfirmar.user == this.userEnviar.user) && (this.userConfirmar.password == this.userEnviar.password)){
        alert("Acceso Permitido")
        this.sAuth.login()
        this.valor = true
      } else {
        alert("Acesso Denegado")
      }
    }

    get activar(){
      return this.valor
    }


  ngOnInit(): void {
   }



}
