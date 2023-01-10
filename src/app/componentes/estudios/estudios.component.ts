import { Component, OnInit } from '@angular/core';
import { AlertServiceService } from 'src/app/servicios/alert-service.service';
import { EstudiosService } from 'src/app/servicios/estudios-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
/* variables */
  datos:any;//guarda los datos recibidos del backend
  rolActivo!:string;// rol actual 
  constructor(private estudioService:EstudiosService,private tokenservice:TokenServicService,private alerta:AlertServiceService) { }

  ngOnInit(): void 
  {
    this.rolActivo= this.tokenservice.rol //Establece el rol actual
  

    this.mostrarDatos(); 
  }


  //funcion para obtener los datos del servidor
  mostrarDatos():void{
    this.estudioService.obtenerDatos().subscribe(datosObtenidos=>{this.datos=datosObtenidos;
    console.log( "se actualizaron los datos"+this.datos);
    })
  }

// funcion eliminar un item de estudio del servidor sino se puede hacer tiene que ser administrador
  borrar(id:number){
    if(this.rolActivo==="Administrador"){
    this.estudioService.borrarEstudio(id).subscribe(()=>this.mostrarDatos(), err=> {alert("ERROR: No se pudieron realizar cambios")});
    this.alerta.saveOK()
   }else{
    this.alerta.onlyAdmin()
   }
    console.log(id);
  }

}
