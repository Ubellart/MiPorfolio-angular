import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/servicios/header-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService:HeaderService,
    private tokenService: TokenServicService
    ) { }

/* variables */
datos:any;
rolActivo:string= this.tokenService.getAuthorities();

  ngOnInit(): void 
  {

   this.mostrarDatos()
    
  }
  mostrarDatos():void{
 this.headerService.obtenerDatos().subscribe(datosObtenidos=>{this.datos=datosObtenidos[0];
    })
  }

}
