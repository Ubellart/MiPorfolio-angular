import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutMeServiceService {
 

  constructor(
    private http:HttpClient
  ) { }

  
  url='http://localhost:8080';

  obtenerDatos():Observable<any>
{
return this.http.get(this.url+'/sobreMi/lista')
}

guardarSobreMi(sobreMi:any):Observable<any>
{
console.log("se ejecuto guardar");
return this.http.post(this.url+'/sobreMi/crear',sobreMi);
}
}

