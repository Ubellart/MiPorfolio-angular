import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  constructor(private http:HttpClient) { }


  url=environment.url;;

  obtenerDatos():Observable<any>
{
return this.http.get(this.url+'/trabajo/lista')
}

borrarTrabajo(id:number):Observable<any>
{
  return this.http.delete(this.url+'/trabajo/eliminar/'+id);
}

guardarTrabajo(skill:any):Observable<any>
{
console.log("se ejecuto guardar");
return this.http.post(this.url+'/trabajo/crear',skill);
}
/* no sirve para nada */ 
buscarTrabajo(id:number):Observable<any>{

  return this.http.get(this.url+'/trabajo/buscar/'+id)
}





}
