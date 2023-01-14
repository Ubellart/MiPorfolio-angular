import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(
    private http:HttpClient

  ) { }

  url=environment.url;

  enviarMail(mail:any):Observable<any>
{
console.log("se envió el mensaje");
return this.http.post(this.url+'/auth/email',mail);
}



}

