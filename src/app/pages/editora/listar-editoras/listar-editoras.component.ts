import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EditoraService } from 'src/app/core/services/editora.service';

@Component({
  selector: 'ng-modal-confirma-editora',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Confirmar exclusão</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Tem certeza de que deseja excluir a editora {{ nomeEditora }}?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancelar</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">Confirmar</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
  nomeEditora!: string;
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};


@Component({
  selector: 'app-listar-editoras',
  templateUrl: './listar-editoras.component.html',
  styleUrls: ['./listar-editoras.component.scss']
})
export class ListarEditorasComponent implements OnInit{

  listaDeEditoras: any = [];

  constructor(private router: Router, private modalService: NgbModal, private toastr: ToastrService, 
    private editoraService: EditoraService ){}


  ngOnInit(): void {
    this.listarEditoras();
  }

  listarEditoras(){
    this.editoraService.listar().subscribe(
    dados => {
      this.listaDeEditoras = dados;
    })
  }

  criarEditora(){
    this.router.navigate(['criarEditora']);
  }

  confirmacaoAoExcluirEditora(editora: any) {
    const modalRef = this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      });
      
      (modalRef.componentInstance as NgModalConfirm).nomeEditora = editora.nome;

      modalRef.result.then((result) => {
        this.excluirEditora(editora);
      },(reason) => {});
  }

  excluirEditora(editora: any) {
    this.editoraService.excluirEditoraPorId(editora.idEditora).subscribe({
      next:(data : any) => {
        this.toastr.success("Editora excluído com sucesso");
        this.listarEditoras();
    },
    error: (error : any) => {
      this.toastr.error("Erro ao excluir editora");
      console.error(error);
    }
  });
  }

}
