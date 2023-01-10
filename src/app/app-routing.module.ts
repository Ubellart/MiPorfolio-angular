import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/modals/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';


const routes: Routes = [ 

];

/* { path:'hola', component: AppComponent},
{path:'login',component: LoginComponent } */


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
