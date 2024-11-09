import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Autor } from '../autor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {


  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  public listar() : Observable<Autor[]>{
    return this.httpClient.get<Autor[]>(`${this.apiUrl}/autores`);
  }

  public criarAutor(model: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/autores`, model);
  } 

  public obterDetalhesAutorPorId(idAutor:string) : Observable<Autor[]>{
    return this.httpClient.get<Autor[]>(`${this.apiUrl}/autores/${idAutor}`);
  }  
  
  public salvarAutor(model: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/autores/${model.idAutor}`, model);
  } 

  public excluirAutorPorId(idAutor: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/autores/${idAutor}`);
  }   
}
