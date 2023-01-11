import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {



  url=environment.url;;
/* url='/api/'; */



  constructor(private http:HttpClient) {



   }

 /* login */
 

login(usuario:any):Observable<any>
{
  console.log('login : '+ usuario);
return this.http.post(this.url+'/auth/login',usuario);
} 


  /* Nuevo usuario */

  registrar(usuario:any):Observable<any>
{
console.log("se registró el usuario");

return this.http.post(this.url+'/auth/nuevo',usuario);
}














}
