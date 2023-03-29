import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Autenticacion } from '../model/autenticar';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService implements OnInit {

url = "http://localhost:8080/auth"
valido:any

  constructor(private httpClient:HttpClient, private router:Router) { }

  public find(id:number):Observable<any>{
    return this.httpClient.get<Autenticacion>(this.url + `/find/${id}`)
  }

  public update(Autenticacion:Autenticacion):Observable<any>{
    return this.httpClient.put<any>(this.url + "/actualizar", Autenticacion);
  }

  login(){
    const token = "valido"
    localStorage.setItem("authToken", token)
    console.log(localStorage.getItem("authTokem"))
  }

  ngOnInit(): void {
  }

  public get logIn():boolean{
    return (localStorage.getItem("authToken") == "valido")
  }
}
