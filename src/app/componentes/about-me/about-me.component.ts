import { Component, OnInit } from '@angular/core';
import { AboutMeServiceService } from 'src/app/about-me-service.service';
import { TokenServicService } from 'src/app/servicios/token-servic.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(
    private aboutMeService:AboutMeServiceService,
    private tokenService: TokenServicService
  ) { }

  datos:any;
  rolActivo:string= this.tokenService.getAuthorities();

  ngOnInit(): void {
   
    this.mostrarDatos();
  }


  mostrarDatos():void{
    this.aboutMeService.obtenerDatos().subscribe(datosObtenidos=>{this.datos=datosObtenidos[0];
       })
     }
}
