import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvioFormularioService {

  url="http://localhost:8080"
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("Servicio corriendo")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      return data
    }))
  }
}
