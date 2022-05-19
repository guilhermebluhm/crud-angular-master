import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaginaLoginServiceService } from '../service/pagina-login-service.service';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent {

  form : FormGroup

  constructor(private srv: PaginaLoginServiceService,
    private frm : FormBuilder) { 
    
      this.form = this.frm.group({
      login: [{value: 'teste@unifor.br', disabled: true}, [Validators.required, Validators.email]],
      senha: ['',[Validators.required,Validators.minLength(6)]]
    })
    
  }

  fazerLogin(){
    if(this.form.valid){
      console.log('fui clicado')
      this.srv.login(this.form.value)
    }
  }

}
