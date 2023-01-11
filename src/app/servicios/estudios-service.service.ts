import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http:HttpClient) { }

  url=environment.url;

  obtenerDatos():Observable<any>
{
return this.http.get(this.url+'/estudio/lista')
}

borrarEstudio(id:number):Observable<any>
{
  return this.http.delete(this.url+'/estudio/eliminar/'+id);
}

guardarEstudio(estudio:any):Observable<any>
{
console.log("se ejecuto guardar");
return this.http.post(this.url+'/estudio/crear',estudio);
}

buscarEstudio(id:number):Observable<any>{

  return this.http.get(this.url+'estudio/buscar/'+id)
}


}
