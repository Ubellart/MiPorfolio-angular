import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutMeServiceService } from 'src/app/about-me-service.service'; 
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';
import { AboutMeComponent } from '../../about-me/about-me.component';

@Component({
  selector: 'app-aboutmodal',
  templateUrl: './aboutmodal.component.html',
  styleUrls: ['./aboutmodal.component.css']
})
export class AboutmodalComponent implements OnInit {

  //Varialbes

  public mostrar = false;//muestra o no el formulario modal
  public accion: string="Editar Sobre Mí"; //titulo del formulario para editar o crear
  public rol:string= this.tokenService.getAuthorities()

  form: FormGroup; 
 
  constructor(
    private aboutMeSevicio: AboutMeServiceService,
    private formbuilder: FormBuilder,
    private aboutMecomponent: AboutMeComponent,
    private alerta:AlertServiceService,
    private tokenService: TokenServicService
  ) {
    
    

    //Creamos el formulario 
    this.form = formbuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      url_cv: [''],
      url_foto: [''],
      id: [''],
    });
  }
 
  ngOnInit(): void {

  }
 
 // Método edita el header desde el servicio 
 editarSobreMi() {
  if( this.rol ==="Administrador"){
   this.aboutMeSevicio.guardarSobreMi(this.form.value).subscribe(
     (data) => console.log(JSON.stringify(data)),
     () => '',
     () => this.aboutMecomponent.mostrarDatos()  //actualiza el compoanente padre
     
   )
  this.alerta.saveOK()  // alerta guardado exitoso
  }
  else {
    this.alerta.onlyAdmin()// alerta solo admin puede guardar
  }
   this.Hide(); //oculta el formulario modal
 }
 
 

 // Método nos oculta el formulario modal
  Hide(): void {
    this.mostrar = false;
  }
 
 
 
 // Método nos muestra formulario modal desde editar cargando los parametros en el form
  ShowEditar(id: any, titulo: any, descripcion: any, url_cv: any, url_foto: any) {
    this.mostrar = true;
    this.accion="Editar Sobre Mí";
    this.form.setValue({
     titulo: titulo,
     descripcion: descripcion,
     url_cv: url_cv,
     url_foto: url_foto,
      id: id,
    });
 
  }
 
 }
 