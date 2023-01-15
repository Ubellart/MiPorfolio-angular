import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { ContactoServiceService } from 'src/app/servicios/contacto-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';
import { ContactoComponent } from '../../contacto/contacto.component';

@Component({
  selector: 'app-contactomodal',
  templateUrl: './contactomodal.component.html',
  styleUrls: ['./contactomodal.component.css']
})
export class ContactomodalComponent implements OnInit {

 //Varialbes

 public mostrar = false; //muestra o no el formulario modal
 public accion: string = 'Nuevo Estudio'; //titulo del formulario para editar o crear
 rolActivo!: string;

 form: FormGroup;
 
  constructor(
    private contacosevicio: ContactoServiceService,
    private formbuilder: FormBuilder,
    private contactocomponent: ContactoComponent,
    private tokenService: TokenServicService,
    private alerta: AlertServiceService

  ) {

//Creamos el formulario
this.form = formbuilder.group({
  red_social: ['', Validators.required],
  img_red: ['', Validators.required],
  url_red: ['', Validators.required],
  id: [''],
});


   }


   ngOnInit(): void {
    this.rolActivo = this.tokenService.getAuthorities(); // cargamos el rol
  }


// Método crar nuevo y editar contacto desde el servicio
crearNuevoContacto() {
  if (this.rolActivo === 'Administrador') {
    //solo el rol administrador puede guardar los cambios
    this.contacosevicio.guardarContacto(this.form.value).subscribe(
      (data) => console.log(JSON.stringify(data)),
      () => '',
      () => this.contactocomponent.mostrarDatos() //actualiza el compoanente padre
    );
    this.alerta.saveOK(); // alerta guardado exitoso
  } else {
    this.alerta.onlyAdmin(); // alerta solo admin puede guardar
  }
  this.Hide(); //oculta el formulario modal
}

// Método nos resetea y muestra el formulario modal
Show(): void {
  this.form.reset();
  this.mostrar = true;
  this.accion = ' Nuevo contacto';
}
// Método nos oculta el formulario modal
Hide(): void {
  this.mostrar = false;
}

// Método nos muestra formulario modal desde editar cargando los parametros en el form
ShowEditar(id: any, red_social: any, img_red: any,   url_red: any) {
  this.mostrar = true;
  this.accion = ' Editar Contacto';
  this.form.setValue({
    red_social: red_social,
    img_red: img_red,
    url_red: url_red,
    id: id,
  });
}



  








}
