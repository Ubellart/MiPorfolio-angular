import {MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

//metodo llamar alerta personalizada

alert(msj:string,msj2: string) {
  this.snackBar.open(msj,msj2 ,
   {
    duration: 2000,
  });

}

//metodo llamar alerta guardado exitoso
  saveOK() : void {
    this.snackBar.open("Los cambios fueron relizados","GUARDADO",
     {
      duration: 3000,
    });
  
}

//metodo llamar alerta solo el admin puede guardar cambios
onlyAdmin() : void {
  this.snackBar.open("Solo el administrador puede guardar cambios","ATENCIÓN",
   {
    duration: 3000,
  });

}












}
