import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { modelProduct } from '../model/product';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-produt-edit',
  templateUrl: './produt-edit.component.html',
  styleUrls: ['./produt-edit.component.css']
})
export class ProdutEditComponent implements OnInit{

  value_rota : number = this.posicaoRota.snapshot.params['id']

  form : FormGroup

  constructor(private srv : ServicesService, 
    private posicaoRota : ActivatedRoute, 
    private rota : Router, 
    private frm : FormBuilder,
    private snackBar: MatSnackBar) {
    this.form = this.frm.group({
      id: [null],
      nome: [null]
    })
  }
  ngOnInit(): void {
    this.srv.getElement(this.value_rota).subscribe(x => {
      this.carregarDados(x)
    })
  }

  carregarDados(v : modelProduct){
    this.form.patchValue({
      nome : v.nome
    })
  }

  private acaoRealizadaSucesso(v: string){
    this.snackBar.open(v,'',{duration:2000})
    this.retornar()
  }

  atualizar(){
    this.srv.updateElement(this.value_rota,this.form.value).subscribe(x => 
      this.acaoRealizadaSucesso('registro atualizado com sucesso'))
  }

  retornar(){
    this.rota.navigate(['paginaInicial'])
  }

}
