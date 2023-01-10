import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { HabilidadesService } from 'src/app/servicios/habilidades-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';
import { HabilidadesComponent } from '../../habilidades/habilidades.component';

@Component({
  selector: 'app-habilidadesmodal',
  templateUrl: './habilidadesmodal.component.html',
  styleUrls: ['./habilidadesmodal.component.css']
})
export class HabilidadesmodalComponent implements OnInit {

  //Varialbes

  public mostrar = false;//muestra o no el formulario modal
  public accion: string="Nueva habilidad"; //titulo del formulario para editar o crear
 form_habilidad: FormGroup;
 public rol:string= this.tokenService.getAuthorities()
 

  constructor(
    private formbuilder: FormBuilder,
    private habilidadesService:HabilidadesService,
    private habilidadesComponent:HabilidadesComponent,
    private alerta:AlertServiceService,
    private tokenService: TokenServicService

    ) { 

    //Creamos el formulario 
    this.form_habilidad = formbuilder.group({
      tecnologia: ['', Validators.required],
      porcentaje: ['', Validators.required],
      logo: ['', Validators.required],
      color: [''],
      id: [''],
    });
  }


ngOnInit(): void {
  }

  // Método crar nuevo estudio desde el servicio 
  nuevaHabilidad() {
    if( this.rol ==="Administrador"){
    this.habilidadesService.guardarHabilidad(this.form_habilidad.value).subscribe(
      (data) => console.log(JSON.stringify(data)),
      () => '',
      () => this.habilidadesComponent.mostrarDatos()  //actualiza el compoanente padre
    );
    this.alerta.saveOK()// alerta guardado exitoso

  }
   
     else{
        this.alerta.onlyAdmin()// alerta solo admin puede guardar
  }
  
  
    this.Hide(); //oculta el formulario modal
  }



// Método nos muestra formulario modal desde editar cargando los parametros en el form
  ShowEditar(id: any, tecno: any, logo: any, porcentaje: any, color: any) {
    this.mostrar = true;
    this.accion="Editar Habilidad";
    this.form_habilidad.setValue({
      tecnologia: tecno,
      porcentaje: porcentaje,
      logo: logo,
      color: color,
      id: id,
    });

  }
  








  // Método nos resetea y muestra el formulario modal
  Show(): void {
   
  this.form_habilidad.reset();
    this.mostrar = true;
    this.accion="Nueva Habilidad";
  }
// Método nos oculta el formulario modal
  Hide(): void {
    this.mostrar = false;
  }

}
