import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http:HttpClient) { }

  url=environment.url;;

  obtenerDatos():Observable<any>
{
return this.http.get(this.url+'/datos/lista')
}

guardarHeader(header:any):Observable<any>
{
console.log("se ejecuto guardar");
return this.http.post(this.url+'/datos/crear',header);
}
}
