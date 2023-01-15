import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { ContactoServiceService } from 'src/app/servicios/contacto-service.service';
import { MailServiceService } from 'src/app/servicios/mail-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

/* variables */
datos:any;//guarda los datos recibidos del backend
rolActivo!:string;// rol actual 
formEmail: FormGroup; 


  constructor(
    private contactoservice :ContactoServiceService,
    private alerta:AlertServiceService,
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


  ngOnInit(): void {
    this.rolActivo= this.tokenService.rol //Establece el rol actual
    this.mostrarDatos(); 
  } 

 //funcion para enviar el mail
  enviarMensaje(){
    this.emailService.enviarMail(this.formEmail.value).subscribe(
      (data) => console.log(JSON.stringify(data)) );

  }  

  //funcion para obtener los datos del servidor
  mostrarDatos():void{
    this.contactoservice.obtenerDatos().subscribe(datosObtenidos=>{this.datos=datosObtenidos;
    console.log( "se actualizaron los datos"+this.datos);
    })
  }

// funcion eliminar un item de estudio del servidor sino se puede hacer tiene que ser administrador
  borrar(id:number){
    if(this.rolActivo==="Administrador"){
    this.contactoservice.borrarContacto(id).subscribe(()=>this.mostrarDatos(), err=> {alert("ERROR: No se pudieron realizar cambios")});
    this.alerta.saveOK()
   }else{
    this.alerta.onlyAdmin()
   }
    console.log(id);
  }


  }

