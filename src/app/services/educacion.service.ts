import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = "http://localhost:8080/educacion"

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + '/lista');
  }

  public save(Educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + '/new/educacion', Educacion);
  }

  public find(id:number):Observable<any>{
    return this.httpClient.get<Educacion>(this.url + `/find/${id}`)
  }

  public update(Educacion:Educacion):Observable<any>{
    return this.httpClient.put<any>(this.url + "/actualizar", Educacion);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `/pop/${id}`);
  }
}
