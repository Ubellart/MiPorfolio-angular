import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  constructor(private http:HttpClient) {
    

   }

   url=environment.url;

   obtenerDatos():Observable<any>
 {
 return this.http.get(this.url+'/contacto/lista')
 }
 
 borrarContacto(id:number):Observable<any>
 {
   return this.http.delete(this.url+'/contacto/eliminar/'+id);
 }
 
 guardarContacto(estudio:any):Observable<any>
 {
 console.log("se ejecuto guardar");
 return this.http.post(this.url+'/contacto/crear',estudio);
 }
 
 buscarContacto(id:number):Observable<any>{
 
   return this.http.get(this.url+'contacto/buscar/'+id)
 }

}
