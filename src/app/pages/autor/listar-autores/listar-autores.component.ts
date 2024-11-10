import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AutorService } from 'src/app/core/services/autor.service';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Confirmar exclusão</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Tem certeza de que deseja excluir o(a) autor(a) {{ nomeAutor }}?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancelar</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">Confirmar</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
  nomeAutor!: string;
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss']
})
export class ListarAutoresComponent implements OnInit {

  listaDeAutores: any = [];

  constructor(private router: Router, private modalService: NgbModal, private toastr: ToastrService, private autorService: AutorService ){}


  ngOnInit(): void {
    this.listarAutores();
  }

  listarAutores(){
    this.autorService.listar().subscribe(
      dados => {
          this.listaDeAutores = dados;
      })
  }

  criarAutor() {
    this.router.navigate(['criarAutor']);
  }

  confirmacaoAoExcluirAutor(autor: any) {
    const modalRef = this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      });
      
      (modalRef.componentInstance as NgModalConfirm).nomeAutor = autor.nome;

      modalRef.result.then((result) => {
        this.excluirAutor(autor);
      },(reason) => {});
  }

  excluirAutor(autor: any) {
    this.autorService.excluirAutorPorId(autor.idAutor).subscribe({
      next:(data : any) => {
        this.toastr.success("Autor excluído com sucesso");
        this.listarAutores();
    },
    error: (error : any) => {
      this.toastr.error("Erro ao excluir autor");
      console.error(error);
    }
  });
  }
}
