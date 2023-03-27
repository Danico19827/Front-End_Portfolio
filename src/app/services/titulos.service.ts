import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Titulos } from '../model/titulos';

@Injectable({
  providedIn: 'root'
})
export class TitulosService {

  url = "http://localhost:8080/titulos"

  constructor(private httpClient:HttpClient) { }

    public lista():Observable<Titulos[]>{
      return this.httpClient.get<Titulos[]>(this.url + '/lista');
    }

    public save(Titulos: Titulos):Observable<any>{
      return this.httpClient.post<any>(this.url + '/new/titulo', Titulos);
    }

    public find(id:number):Observable<any>{
      return this.httpClient.get<Titulos>(this.url + `/find/${id}`)
    }

    public update(Titulos:Titulos):Observable<any>{
      return this.httpClient.put<any>(this.url + "/actualizar", Titulos);
    }

    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `/pop/${id}`);
    }

}
