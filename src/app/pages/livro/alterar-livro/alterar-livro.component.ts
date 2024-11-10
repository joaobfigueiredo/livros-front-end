import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutorService } from 'src/app/core/services/autor.service';
import { EditoraService } from 'src/app/core/services/editora.service';
import { LivroService } from 'src/app/core/services/livro.service';

@Component({
  selector: 'app-alterar-livro',
  templateUrl: './alterar-livro.component.html',
  styleUrls: ['./alterar-livro.component.scss']
})
export class AlterarLivroComponent  implements OnInit  {

  editarLivroForm: LivroForm = new LivroForm();
  editoras: any[] = [];
  autores: any[] = [];  

  @ViewChild("livroForm")
  livroForm!: NgForm;
  isSubmitted: boolean = false;
  idLivro: any;
  detalhesLivro: any = [];

  constructor(
    private router: Router,  
    private route: ActivatedRoute,    
    private livroService: LivroService, 
    private editoraService: EditoraService,
    private autorService: AutorService, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.idLivro = this.route.snapshot.params['idLivro'];
    this.obterDetalhesLivroPorId();
    this.carregarEditoras();
    this.carregarAutores();
  }

  carregarEditoras() {
    this.editoraService.listar().subscribe({
      next: (dados) => this.editoras = dados,
      error: (error) => this.toastr.error('Erro ao carregar editoras')
    });
  }

  carregarAutores() {
    this.autorService.listar().subscribe({
      next: (dados) => this.autores = dados,
      error: (error) => this.toastr.error('Erro ao carregar autores')
    });
  }    

  salvarLivro(isValid: any){
    this.isSubmitted = true;

    if(isValid){

      this.editarLivroForm.editora = {
        idEditora: this.editarLivroForm.editoraId
      }
       this.editarLivroForm.autores = this.editarLivroForm.autoresIds.map((idAutor: string) => ({
          idAutor: idAutor
      }));

      this.livroService.salvarLivro(this.editarLivroForm).subscribe({
        next: async (data) => {
          if (data != null) {
              this.toastr.success("Livro salvo com sucesso");
              setTimeout(() => {
                this.router.navigate(['/listarLivros']);
              }, 500);
          }
        },
        error: async (error) => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/listarLivros']);
          }, 500);
        }
      });
      
    }

  }


  obterDetalhesLivroPorId(){
    this.livroService.obterDetalhesLivroPorId(this.idLivro).subscribe({
      next: (livro:any) => {
        if(livro){
          this.editarLivroForm = {
            ...livro,
            nomesAutores: livro.autores?.map((autor: any) => autor.nome).join(', ') || 'N/A',
            editoraId: livro.editora?.idEditora || null,
            autoresIds: livro.autores ? livro.autores.map((autor: any) => autor.idAutor) : []
          }
        }
      },
      error: (error: any) => { }
    }
    );
  }

}

export class LivroForm {
  idLivro: string = "";
  titulo: string = "";
  anoPublicacao: Number = 0;
  genero: string = "";
  editoraId: string = "";
  autoresIds: string[] = [];
  editora: any = [];
  autores: any[] = [];
}