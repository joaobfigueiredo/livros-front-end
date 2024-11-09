import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditoraService } from 'src/app/core/services/editora.service';

@Component({
  selector: 'app-alterar-editora',
  templateUrl: './alterar-editora.component.html',
  styleUrls: ['./alterar-editora.component.scss']
})
export class AlterarEditoraComponent implements OnInit {

  editarEditoraForm: EditoraForm = new EditoraForm();
  @ViewChild("editoraForm")
  editoraForm!: NgForm;

  isSubmitted: boolean = false;
  idEditora: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private editoraService: EditoraService) { }  

    
  ngOnInit(): void {
    this.idEditora = this.route.snapshot.params['idEditora'];
    this.obterDetalhesEditoraPorId();
  }

  obterDetalhesEditoraPorId(){
    this.editoraService.obterDetalhesEditoraPorId(this.idEditora).subscribe({
      next: (data:any) => {
        if(data){
          this.editarEditoraForm.idEditora = data.idEditora;
          this.editarEditoraForm.nome = data.nome;
          this.editarEditoraForm.telefone = data.telefone;
          this.editarEditoraForm.email = data.email;
          this.editarEditoraForm.website = data.website;
        }
      },
      error: (error: any) => { }
    });
  }

  salvarEditora(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.editoraService.salvarEditora(this.editarEditoraForm).subscribe({
        next: async (data:any) => {
        if (data != null) {
          this.toastr.success("Editora salva com sucesso");
              setTimeout(() => {
                this.router.navigate(['/listarEditoras']);
              }, 500);
        }
      },
      error:  async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/listarEditoras']);
          }, 500);
    }});
    }
  }

}

export class EditoraForm {
  idEditora: string = "";
  nome: string = "";
  telefone: string = "";
  email: string = "";
  website: string = "";
}