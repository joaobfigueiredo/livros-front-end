import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Editora } from '../editora';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar() : Observable<Editora[]>{
    return this.httpClient.get<Editora[]>(`${this.apiUrl}/editoras`);
  }

  public criarEditora(model: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/editoras`, model);
  }   

  public salvarEditora(model: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/editoras/${model.idEditora}`, model);
  }   

  public obterDetalhesEditoraPorId(idEditora:string) : Observable<Editora[]>{
    return this.httpClient.get<Editora[]>(`${this.apiUrl}/editoras/${idEditora}`);
  }    

  public excluirEditoraPorId(idEditora: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/editoras/${idEditora}`);
  } 
}
