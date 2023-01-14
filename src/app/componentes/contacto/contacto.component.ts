import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailServiceService } from 'src/app/servicios/mail-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

   formEmail: FormGroup; 


  constructor(
  private tokenService: TokenServicService,
    private emailService: MailServiceService,
    private formbuilder: FormBuilder 
  ) {

 //Creamos el formulario
   this.formEmail = formbuilder.group({
    emailDe: ['', Validators.required],
    asunto: ['', Validators.required],
    mensaje: ['',Validators.required],
    
  }); 


   }


   


/*   variables */
  rolActivo:string= this.tokenService.getAuthorities(); 

  ngOnInit(): void {
  } 


  enviarMensaje(){
    this.emailService.enviarMail(this.formEmail.value).subscribe(
      (data) => console.log(JSON.stringify(data)) );

  }  

  }

