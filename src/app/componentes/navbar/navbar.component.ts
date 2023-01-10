import { Component, OnInit } from '@angular/core';
import { TokenServicService } from 'src/app/servicios/token-servic.service';
import { LoginComponent } from '../modals/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

usuarioLogged!: boolean 
nombreUsuario:string = ""
roles:string=""


  constructor(private tokenservice : TokenServicService) { }



  ngOnInit(): void {

//si tiene un token el usuario està logeado guardamos el nombre de usuario y su rol

if (this.tokenservice.getToken()){ 

  this.usuarioLogged= true;           
  this.nombreUsuario= this.tokenservice.getUsername(); //obtenemos el nombre del usuario
  
}else{
  this.usuarioLogged= false;
  
}
 this.roles= this.tokenservice.getAuthorities(); //obtenemos el rol  "usuario , admin o visitante" 
  }



}
