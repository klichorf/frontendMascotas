import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { AboutComponent } from './plantilla/components/about/about.component';
import { ContactComponent } from './plantilla/components/contact/contact.component';
import { IniciarSesionComponent } from './plantilla/components/iniciar-sesion/iniciar-sesion.component';
import { RegisterComponent } from './plantilla/components/register/register.component';
import { ServiciosComponent } from './plantilla/components/servicios/servicios.component';
import { TeamComponent } from './plantilla/components/team/team.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
   path:"inicio",
   component: InicioComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:"/inicio"
  },
  {
    path:"seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x=> x.SeguridadModule)
  },
  {
    path:"administracion",
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x=> x.AdministracionModule)
  },
  
{

path:"servicios",component: ServiciosComponent

},


{

  path:"team",component: TeamComponent

  },

  {

    path:"contact",component: ContactComponent

    },





  {

    path:"register",component: RegisterComponent

    },


    {

      path:"iniciar_sesion",component: IniciarSesionComponent

      },



{

  path:"about",component: AboutComponent

  },


  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
