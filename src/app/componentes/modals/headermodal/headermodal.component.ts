import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { HeaderService } from 'src/app/servicios/header-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-headermodal',
  templateUrl: './headermodal.component.html',
  styleUrls: ['./headermodal.component.css'],
})
export class HeadermodalComponent implements OnInit {
  //Varialbes

  public mostrar = false; //muestra o no el formulario modal
  public accion: string = 'Editar Portada'; //titulo del formulario para editar o crear
  public rol: string = this.tokenService.getAuthorities();

  form: FormGroup;

  constructor(
    private headersevicio: HeaderService,
    private formbuilder: FormBuilder,
    private headercomponent: HeaderComponent,
    private alerta: AlertServiceService,
    private tokenService: TokenServicService
  ) {
    //Creamos el formulario
    this.form = formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      titulo: ['', Validators.required],
      img_fondo: [''],
      img_perfil: [''],
      id: [''],
    });
  }

  ngOnInit(): void {}

  // Método edita el header desde el servicio
  editarHeader() {
    if (this.rol === 'Administrador') {
      this.headersevicio.guardarHeader(this.form.value).subscribe(
        (data) => console.log(JSON.stringify(data)),
        () => '',
        () => this.headercomponent.mostrarDatos() //actualiza el compoanente padre
      );
      this.alerta.saveOK(); // alerta guardado exitoso
    } else {
      this.alerta.onlyAdmin(); // alerta solo admin puede guardar
    }

    this.Hide(); //oculta el formulario modal
  }

  // Método nos oculta el formulario modal
  Hide(): void {
    this.mostrar = false;
  }

  // Método nos muestra formulario modal desde editar cargando los parametros en el form
  ShowEditar(
    id: any,
    nombre: any,
    apellido: any,
    titulo: any,
    img_fondo: any,
    img_perfil: any
  ) {
    this.mostrar = true;
    this.accion = 'Editar Portada';
    this.form.setValue({
      nombre: nombre,
      apellido: apellido,
      titulo: titulo,
      img_fondo: img_fondo,
      img_perfil: img_perfil,
      id: id,
    });
  }
}
