import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenServicService } from 'src/app/servicios/token-servic.service';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public hide = true;
    public estadoPositivo = true
   public mostrar = false;
   form_Registro : FormGroup;
   form_Login : FormGroup;
 rol : string[]=[];


 
  errorMessage = 'Invalid Credentials';
  successMessage= 'login';
  invalidLogin = false;
  loginSuccess = false;




  @Input() titulo="";

  constructor(
    private formbuilder: FormBuilder,
    private tokenservice: TokenServicService,
    private usuariosService:UsuariosServiceService,
    private alerta:AlertServiceService,
   /*  private ruta:Router */
   
    
    ) { 

      //Creamos el formulario de login
    this.form_Login = formbuilder.group({
   
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required],
     
    });

    //Creamos el formulario de registro
    this.form_Registro = formbuilder.group({
   
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required],
     
    });
  }

/*    passwordRepeat: ['', Validators.required], */
  /*      id: [''], */

// Método crar nuevo USUARIO
nuevoUsuario() {
 
  this.usuariosService.registrar(this.form_Registro.value).subscribe(
    (data) => console.log((data)),
    () => '',

  );
  this.alerta.alert("Usuario registrado correctamente","OK!")//alerta usuario creado con exito
  
  this.Hide();  //oculta el formulario modal */
}



/* METODO login */


loginUsuario() {
  this.usuariosService.login(this.form_Login.value).subscribe((result)=> {
    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful.';
    this.tokenservice.setToken(result.token);
    this.tokenservice.setUsername (result.nombreUsuario);
    this.tokenservice.setAuthorities(result.authorities);
    this.rol = result.authorities;
     window.location.reload();
    this.alerta.alert("Bienvenid@ "+this.tokenservice.getUsername() ," OK!");//alerta de bienvenida
    
    
  }, () => {
    this.invalidLogin = true;
    this.loginSuccess = false;

  });      
} 

logOut(){
  this.tokenservice.logOut();
  window.location.reload();
  
}
 




  

    Show(){
 
      this.mostrar=true;

    
    }
    Hide(){
  
      
      
      this.mostrar=false;
      
    }

    cambiaEstado(){
      this.estadoPositivo = !this.estadoPositivo;
    
    }
  
   }


  