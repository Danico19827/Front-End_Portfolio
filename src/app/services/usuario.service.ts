import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "https://newbackendportfolio.onrender.com/usuario"
  descripcionN: any;

  constructor(private httpClient:HttpClient) { }

    public lista():Observable<Usuario[]>{
      return this.httpClient.get<Usuario[]>(this.url + '/lista');
    }

    public save(Usuario: Usuario):Observable<any>{
      return this.httpClient.post<any>(this.url + '/new/usuario', Usuario);
    }

    public find(id:number):Observable<any>{
      return this.httpClient.get<Usuario>(this.url + `/find/${id}`)
    }

    public update(Usuario:Usuario):Observable<any>{
      return this.httpClient.put<any>(this.url + "/actualizar", Usuario);
    }

    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `/pop/${id}`);
    }

}
