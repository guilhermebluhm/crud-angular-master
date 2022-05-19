import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs';
import { modelProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly API_GET : string = "/produto/listar"
  private readonly API_POST : string = "/produto/adicionar"
  private readonly API_UPDATE : string = "produto/atualizar"
  private readonly API_DELETE : string = "produto/remover"

  constructor(private http : HttpClient) { }

  public getAll(){
    return this.http.get<modelProduct[]>(this.API_GET).pipe(delay(2000))
  }

  public save(rcd: modelProduct){
    return this.http.post(this.API_POST,rcd)
  }

  public getElement(v: number){
    return this.http.get<modelProduct>(`${this.API_GET}/${v}`)
  }

  public updateElement(v: number, rcd : modelProduct){
    return this.http.put<modelProduct>(`${this.API_UPDATE}/${v}`,rcd)
  }

  public removeElement(v: number){
    return this.http.delete(`${this.API_DELETE}/${v}`)
  }
}
