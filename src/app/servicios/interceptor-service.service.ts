import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenServicService } from './token-servic.service';






@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService {

  constructor(private tokenService : TokenServicService) { }


  intercept(req:HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if(token != null){
      intReq= req.clone({
        headers:req.headers.set('Authorization','Bearer'+token)
      });
    }
    return next.handle(intReq);
  }
}

export const InterceptorProvider = [{

provide: HTTP_INTERCEPTORS,
useClass: InterceptorServiceService,
multi: true


}];