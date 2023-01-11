import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutMeServiceService {
 

  constructor(
    private http:HttpClient
  ) { }

  
  url=environment.url; 

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

