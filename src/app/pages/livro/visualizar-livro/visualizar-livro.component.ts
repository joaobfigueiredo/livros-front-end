import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from 'src/app/core/services/livro.service';

@Component({
  selector: 'app-visualizar-livro',
  templateUrl: './visualizar-livro.component.html',
  styleUrls: ['./visualizar-livro.component.scss']
})
export class VisualizarLivroComponent implements OnInit {

  idLivro: any;
  detalhesLivro: any = [];

  
  constructor(private livroService: LivroService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idLivro = this.route.snapshot.params['idLivro']; 
    this.obterDetalhesLivroPorId();
  }

  obterDetalhesLivroPorId(){
    this.livroService.obterDetalhesLivroPorId(this.idLivro).subscribe({
      next: (livro:any) => {
        if(livro){
          this.detalhesLivro = livro;
        }
      },
      error: (error: any) => { }
    }
    );
  }
}
