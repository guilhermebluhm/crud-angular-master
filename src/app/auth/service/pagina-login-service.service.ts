import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { credencial } from '../model/credencial.model';

@Injectable({
  providedIn: 'root'
})

export class PaginaLoginServiceService {

  private estadoLoginBehavior = new BehaviorSubject<boolean>(false);

  estaLogado$ = this.estadoLoginBehavior.asObservable()

  constructor(private roteamento : Router, private posicaoAtual: ActivatedRoute) { 
  }

  login(crd : credencial){
    localStorage.setItem('token',crd.senha)
    this.estadoLoginBehavior.next(true)
    this.roteamento.navigate(['sucesso'], {relativeTo: this.posicaoAtual})
  }

  logout(){
    localStorage.clear()
    this.estadoLoginBehavior.next(false)
    this.roteamento.navigate(['admin'])
  }


}
