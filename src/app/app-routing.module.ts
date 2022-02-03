import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule,Routes} from '@angular/router';
import { PageNosotrosComponent } from './page-nosotros/page-nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from "./usersModule/cliente/cliente.component";
import { AdministradorComponent } from './usersModule/administrador/administrador.component';


const routes: Routes=[{path:"index",component: IndexComponent},
{ path: '', redirectTo: '/index', pathMatch: 'full' },
{path:"nosotros",component:PageNosotrosComponent},
{path :"contact", component:ContactoComponent},
{path:"noticias",component:NoticiasComponent},
{path:"login", component:LoginComponent},
{path:"cliente/:id", component:ClienteComponent },
{path:"administrador/:id", component:AdministradorComponent },

];


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes,{onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled'})
  ]
  ,exports:[RouterModule]
})

export class AppRoutingModule { }
