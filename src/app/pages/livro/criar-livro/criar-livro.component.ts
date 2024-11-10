import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutorService } from 'src/app/core/services/autor.service';
import { EditoraService } from 'src/app/core/services/editora.service';
import { LivroService } from 'src/app/core/services/livro.service';

@Component({
  selector: 'app-criar-livro',
  templateUrl: './criar-livro.component.html',
  styleUrls: ['./criar-livro.component.scss']
})
export class CriarLivroComponent implements OnInit {

  criarLivroForm: LivroForm = new LivroForm();
  editoras: any[] = [];
  autores: any[] = [];  

  @ViewChild("livroForm")
  livroForm!: NgForm;
  isSubmitted: boolean = false;

  constructor(
    private router: Router,  
    private livroService: LivroService, 
    private editoraService: EditoraService,
    private autorService: AutorService, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
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

  criarLivro(isValid: any){
    this.isSubmitted = true;

    if(isValid){

      this.criarLivroForm.editora = {
        idEditora: this.criarLivroForm.editoraId
      }
       this.criarLivroForm.autores = this.criarLivroForm.autoresIds.map((idAutor: string) => ({
          idAutor: idAutor
      }));


      this.livroService.criarLivro(this.criarLivroForm).subscribe({
        next: async (data) => {
          if (data != null) {
              this.toastr.success("Livro cadastrado com sucesso");
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


}

export class LivroForm {
  titulo: string = "";
  anoPublicacao: Number = 0;
  genero: string = "";
  editoraId: string = "";  // ID da editora selecionada
  autoresIds: string[] = [];  // IDs dos autores selecionados  
  editora: any = [];
  autores: any[] = [];
  
}