import { Component, OnInit } from '@angular/core';
import { TokenServicService } from 'src/app/servicios/token-servic.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {




  constructor(
    private tokenService: TokenServicService
  ) { }


/*   variables */
rolActivo:string= this.tokenService.getAuthorities();

  ngOnInit(): void {
  }


  
}
