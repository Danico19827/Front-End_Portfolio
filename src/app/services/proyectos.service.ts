import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {


  url = "http://localhost:8080/proyectos"

  constructor(private httpClient:HttpClient) { }

    public lista():Observable<Proyectos[]>{
      return this.httpClient.get<Proyectos[]>(this.url + '/lista');
    }

    public save(Proyectos: Proyectos):Observable<any>{
      return this.httpClient.post<any>(this.url + '/new/proyecto', Proyectos);
    }

    public find(id:number):Observable<any>{
      return this.httpClient.get<Proyectos>(this.url + `/find/${id}`)
    }

    public update(Proyectos:Proyectos):Observable<any>{
      return this.httpClient.put<any>(this.url + "/actualizar", Proyectos);
    }

    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `/pop/${id}`);
    }
}
