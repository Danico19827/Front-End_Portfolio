import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  
  constructor(private http:HttpClient) {
  }

  recibirDatos():Observable<any>{
    return this.http.get('./assets/json/infoUser.json');
  }

}