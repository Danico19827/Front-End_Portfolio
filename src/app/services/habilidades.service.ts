import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})

export class HabilidadesService {


  url = "http://localhost:8080/habilidades"

  constructor(private httpClient:HttpClient) { }

    public lista():Observable<Habilidades[]>{
      return this.httpClient.get<Habilidades[]>(this.url + '/lista');
    }

    public save(Habilidades: Habilidades):Observable<any>{
      return this.httpClient.post<any>(this.url + '/new/habilidad', Habilidades);
    }

    public find(id:number):Observable<any>{
      return this.httpClient.get<Habilidades>(this.url + `/find/${id}`)
    }

    public update(Habilidades:Habilidades):Observable<any>{
      return this.httpClient.put<any>(this.url + "/actualizar", Habilidades);
    }

    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `/pop/${id}`);
    }

}
