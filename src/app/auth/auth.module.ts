import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { authRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [
    PaginaLoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    authRoutingModule 
  ]
})
export class AuthModule { }
