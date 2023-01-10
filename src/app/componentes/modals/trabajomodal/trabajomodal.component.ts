import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrabajosComponent } from '../../trabajos/trabajos.component';
import { TrabajosService } from 'src/app/servicios/trabajos-service.service';

import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';

@Component({
  selector: 'app-trabajomodal',
  templateUrl: './trabajomodal.component.html',
  styleUrls: ['./trabajomodal.component.css'],
})
export class TrabajomodalComponent implements OnInit {
  //Varialbes

  public mostrar = false; //muestra o no el formulario modal
  public accion: string = 'Nueva Experiencia'; //titulo del formulario para editar o crear
  public rol: string = this.tokenService.getAuthorities();

  form_trabajo: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private trabajoService: TrabajosService,
    private trabajoComponent: TrabajosComponent,
    private alerta: AlertServiceService,
    private tokenService: TokenServicService
  ) {
    //Creamos el formulario en constructor
    this.form_trabajo = formbuilder.group({
      proyecto: ['', Validators.required],
      empresa: ['', Validators.required],
      img_url: ['', Validators.required],
      descripcion: [''],
      link_proyecto: [''],
      fecha_inicio: [''],
      fecha_fin: [''],
      id: [''],
    });
  }

  ngOnInit(): void {}

  // Método crear y editar nuevo estudio desde el servicio
  nuevoTrabajo() {
    if (this.rol === 'Administrador') {
      this.trabajoService.guardarTrabajo(this.form_trabajo.value).subscribe(
        (data) => console.log(JSON.stringify(data)),
        () => '',
        () => this.trabajoComponent.mostrarDatos() //actualiza el compoanente padre
      );
      this.alerta.saveOK(); // alerta guardado exitoso
    } else {
      this.alerta.onlyAdmin(); // alerta solo admin puede guardar
    }

    this.Hide(); //oculta el formulario modal
  }
  // Método nos muestra formulario modal desde editar cargando los parametros en el form
  ShowEditar(
    id: any,
    proyec: any,
    empre: any,
    img: any,
    descrip: any,
    link: any,
    fecha_i: any,
    fecha_f: any
  ) {
    this.mostrar = true;
    this.accion = 'Editar Experiencia';
    this.form_trabajo.setValue({
      id: id,
      proyecto: proyec,
      empresa: empre,
      img_url: img,
      descripcion: descrip,
      link_proyecto: link,
      fecha_inicio: fecha_i,
      fecha_fin: fecha_f,
    });
  }

  // Método nos resetea y muestra el formulario modal
  Show(): void {
    this.form_trabajo.reset();
    this.mostrar = true;
    this.accion = 'Nueva Experiencia';
  }
  // Método nos oculta el formulario modal
  Hide(): void {
    this.mostrar = false;
  }
}
