import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaginaLoginServiceService } from 'src/app/auth/service/pagina-login-service.service';
import { modelProduct } from '../model/product';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  displayedColumns = ['id','nome','acoes']

  public listaProdutos : Observable<modelProduct[]>

  constructor(private serv : ServicesService,
    private roteamento : Router,
    private localAtual : ActivatedRoute,
    private snackBar: MatSnackBar,
    private servLog: PaginaLoginServiceService) {

    this.listaProdutos = this.serv.getAll()

  }

  fazerLogout(){
    this.servLog.logout()
  }

  private atualizarPagina(){
    window.location.reload()
  }

  private acaoRemoverComSucesso(v: string){
    this.snackBar.open(v,'',{duration: 2000})
    this.atualizarPagina()
  }

  adicionar(){
    this.roteamento.navigate(['criar'],{relativeTo: this.localAtual})
  }

  editar(v: number){

    console.log(v)
    this.roteamento.navigate([`${'editar'}/${v}`],{relativeTo: this.localAtual})
  }

  remover(v: number){
    this.serv.removeElement(v).subscribe(x => 
      this.acaoRemoverComSucesso('registro removido com sucesso'))
    //this.atualizarPagina()
  }
}
