import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http:HttpClient) { }


  url='http://localhost:8080';

  obtenerDatos():Observable<any>
{
return this.http.get(this.url+'/skill/lista')
}

borrarHabilidad(id:number):Observable<any>
{
  return this.http.delete(this.url+'/skill/eliminar/'+id);
}

guardarHabilidad(skill:any):Observable<any>
{
console.log("se ejecuto guardar");
return this.http.post(this.url+'/skill/crear',skill);
}
/* no sirve para nada */ 
buscarHabilidad(id:number):Observable<any>{

  return this.http.get(this.url+'/skill/buscar/'+id)
}


}
