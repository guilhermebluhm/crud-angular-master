import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';

const routes: Routes = [
    {
        path: 'login', component: PaginaLoginComponent
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class authRoutingModule { }