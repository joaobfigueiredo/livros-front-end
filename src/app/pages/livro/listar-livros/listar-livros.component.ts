import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent {

  listaDeLivros: any = [];

  constructor(private router: Router, ){}

  criarLivro() {
    this.router.navigate(['criarLivro']);
  }

  confirmacaoAoExcluirLivro(livro: any){}
}
