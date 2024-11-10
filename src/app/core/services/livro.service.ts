import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Livro } from '../livro';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  public listar() : Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(`${this.apiUrl}/livros`);
  }

  public obterDetalhesLivroPorId(idLivro:string) : Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(`${this.apiUrl}/livros/${idLivro}`);
  }

  public criarLivro(model: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/livros`, model);
  }   

  public salvarLivro(model: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/livros/${model.idLivro}`, model);
  }   

  public excluirLivroPorId(idLivro: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/livros/${idLivro}`);
  }   
}