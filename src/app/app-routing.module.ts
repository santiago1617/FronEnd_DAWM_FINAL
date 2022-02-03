import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule,Routes} from '@angular/router';
import { PageNosotrosComponent } from './page-nosotros/page-nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes=[{path:"index",component: IndexComponent},
{ path: '', redirectTo: '/index', pathMatch: 'full' },{path:"nosotros",component:PageNosotrosComponent},
{path:"noticias",component:NoticiasComponent}];  
@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
  ,exports:[RouterModule]
})

export class AppRoutingModule { }
