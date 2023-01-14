import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

/* material */
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatLabel } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 





/* componentes */
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/modals/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { EstudiomodalComponent } from './componentes/modals/estudiomodal/estudiomodal.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';

import { ContactoComponent } from './componentes/contacto/contacto.component';

import { HabilidadesmodalComponent } from './componentes/modals/habilidadesmodal/habilidadesmodal.component';
import { TrabajomodalComponent } from './componentes/modals/trabajomodal/trabajomodal.component';
import { HeadermodalComponent } from './componentes/modals/headermodal/headermodal.component';
import { AboutmodalComponent } from './componentes/modals/aboutmodal/aboutmodal.component';
import { InterceptorProvider } from './servicios/interceptor-service.service';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HeaderComponent,
    AboutMeComponent,
    EstudiosComponent,
    TrabajosComponent,
  
    EstudiomodalComponent,
       HabilidadesComponent,
       
       ContactoComponent,
   
       HabilidadesmodalComponent,
       TrabajomodalComponent,
       HeadermodalComponent,
       AboutmodalComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

   /*  materials */
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,

    NgCircleProgressModule.forRoot({})
    

  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
