import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AutorService } from 'src/app/core/services/autor.service';
import { LivroService } from 'src/app/core/services/livro.service';

@Component({
  selector: 'ng-modal-confirma-livro',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Confirmar exclusão</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Tem certeza de que deseja excluir o livro {{ tituloLivro }}?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancelar</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">Confirmar</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
  tituloLivro!: string;
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent implements OnInit {

  listaDeLivros: any = [];

  constructor(private router: Router, private modalService: NgbModal, private toastr: ToastrService, 
    private livroService: LivroService, private autorService: AutorService ){}

  ngOnInit(): void {
    this.listarLivros();
  }

  listarLivros(){


    this.livroService.listar().subscribe((livros) => {
      this.listaDeLivros = livros.map(livro => ({
        ...livro,
        nomesAutores: livro.autores?.map((autor: any) => autor.nome).join(', ') || 'N/A'
      }));
    });  
  }

  concatenarNomesAutores(livro: any): string {
    this.autorService.buscarAutoresPorLivro(livro.idLivro).subscribe(
      {
        next: (data:any) =>{
          if(data){

            livro.autores = data;
            return livro.autores?.map((autor: any) => autor.nome).join(', ') || '';
          } else {
            return null;
          }
        },
        error: (erro) =>{ return ""}
      }
    )

    return "";
    
  }

  criarLivro() {
    this.router.navigate(['criarLivro']);
  }

  confirmacaoAoExcluirLivro(livro: any){
    const modalRef = this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      });
      
      (modalRef.componentInstance as NgModalConfirm).tituloLivro = livro.titulo;

      modalRef.result.then((result) => {
        this.excluirLivro(livro);
      },(reason) => {});
  }

  excluirLivro(livro: any) {
    this.livroService.excluirLivroPorId(livro.idLivro).subscribe({
      next:(data : any) => {
        this.toastr.success("Livro excluído com sucesso");
        this.listarLivros();
    },
    error: (error : any) => {
      this.toastr.error("Erro ao excluir livro");
      console.error(error);
    }
  });
  }  
}
