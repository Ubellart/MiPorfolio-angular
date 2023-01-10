import { Component, OnInit } from '@angular/core';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { HabilidadesService } from 'src/app/servicios/habilidades-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  /* variables */
  datos: any; //guarda los datos recibidos del backend
  public rol: string = this.tokenService.getAuthorities();

  constructor(
    private habilidadesService: HabilidadesService,
    private alerta: AlertServiceService,
    private tokenService: TokenServicService
  ) {}

  ngOnInit(): void {
    this.mostrarDatos();
  }

  //funcion para obtener los datos del servidor
  mostrarDatos(): void {
    this.habilidadesService.obtenerDatos().subscribe((datosObtenidos) => {
      this.datos = datosObtenidos;
      console.log('se actualizaron los datos de habilidades' + this.datos);
    });
  }
  // funcion eliminar un item de estudio del servidor
  borrar(id: number) {
    if (this.rol === 'Administrador') {
      this.habilidadesService
        .borrarHabilidad(id)
        .subscribe(() => this.mostrarDatos());

      console.log(id);
      this.alerta.saveOK(); // alerta guardado exitoso
    } else {
      this.alerta.onlyAdmin(); // alerta solo admin puede guardar
    }
  }
}
