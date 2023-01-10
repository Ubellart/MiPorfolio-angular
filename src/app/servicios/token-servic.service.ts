import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenServicService {
  roles: Array<string> = [];
 rol:string="";
  constructor() {}

  /*  guardar y pedir token  */

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string {
     return sessionStorage.getItem(TOKEN_KEY)!;
    
  }

  /*  guardar y pedir nombre usuario  */

  public setUsername(username: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername(): string {
    /* window.sessionStorage.getItem(); */
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  /*  guardar y pedir roles  */

  public setAuthorities(authorities: string): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }
  public getAuthorities( ):string {
   
   if(sessionStorage.getItem(AUTHORITIES_KEY)!){
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => { 
    this.roles.push(authority.authority);
   
   });
   // guardamos el rol en un string "Administrador""Usuario""Visitante"
   if(this.roles.some(rols => "ROLE_ADMIN" === rols)){ 
    this.rol =  "Administrador"

    }else{
      this.rol =  "Usuario"
    }
   }
   else{
    this.rol =  "Visitante"
   
  }
   return this.rol; //devolvemos el rol
  }

  
/* 
  eliminar cookies al cerrar sesion */

public logOut(): void{
  window.sessionStorage.clear();

}

}
