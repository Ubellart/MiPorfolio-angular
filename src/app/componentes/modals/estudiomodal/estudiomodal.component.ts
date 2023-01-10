import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { EstudiosService } from 'src/app/servicios/estudios-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';
import { EstudiosComponent } from '../../estudios/estudios.component';

@Component({
  selector: 'app-estudiomodal',
  templateUrl: './estudiomodal.component.html',
  styleUrls: ['./estudiomodal.component.css'],
})
export class EstudiomodalComponent {
  //Varialbes

  public mostrar = false; //muestra o no el formulario modal
  public accion: string = 'Nuevo Estudio'; //titulo del formulario para editar o crear
  rolActivo!: string;

  form: FormGroup;

  constructor(
    private estudiosevicio: EstudiosService,
    private formbuilder: FormBuilder,
    private estudiocomponent: EstudiosComponent,
    private tokenService: TokenServicService,
    private alerta: AlertServiceService
  ) {
    //Creamos el formulario
    this.form = formbuilder.group({
      institucion: ['', Validators.required],
      titulo: ['', Validators.required],
      fecha_egre: ['', Validators.required],
      img_insti: [''],
      id: [''],
    });
  }

  ngOnInit(): void {
    this.rolActivo = this.tokenService.getAuthorities(); // cargamos el rol
  }

  // Método crar nuevo y editar estudio desde el servicio
  crearNuevoUsuario() {
    if (this.rolActivo === 'Administrador') {
      //solo el rol administrador puede guardar los cambios
      this.estudiosevicio.guardarEstudio(this.form.value).subscribe(
        (data) => console.log(JSON.stringify(data)),
        () => '',
        () => this.estudiocomponent.mostrarDatos() //actualiza el compoanente padre
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
    this.accion = ' Nuevo Estudio';
  }
  // Método nos oculta el formulario modal
  Hide(): void {
    this.mostrar = false;
  }

  // Método nos muestra formulario modal desde editar cargando los parametros en el form
  ShowEditar(id: any, insti: any, titulo: any, fecha: any, img: any) {
    this.mostrar = true;
    this.accion = ' Editar Estudio';
    this.form.setValue({
      institucion: insti,
      titulo: titulo,
      fecha_egre: fecha,
      img_insti: img,
      id: id,
    });
  }
}
