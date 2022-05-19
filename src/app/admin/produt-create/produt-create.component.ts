import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-produt-create',
  templateUrl: './produt-create.component.html',
  styleUrls: ['./produt-create.component.css']
})
export class ProdutCreateComponent {

  formulario : FormGroup

  constructor(private serv: ServicesService, 
    private frm : FormBuilder, 
    private roteamento : Router, 
    private posicaoAtual : ActivatedRoute,
    private snackBar: MatSnackBar) {

      this.formulario = this.frm.group({
        nome: [null]
      })
  }

  private acaoRealizadaSucesso(v: string){
    this.snackBar.open(v,'',{duration:2000})
    this.cancelarAcao()
  }

  adicionarProduto(){
    this.serv.save(this.formulario.value).subscribe(x => 
      this.acaoRealizadaSucesso('registro inserido com sucesso'))
  }

  cancelarAcao(){
    this.roteamento.navigate(['paginaInicial'])
  }

}
