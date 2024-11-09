import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditoraService } from 'src/app/core/services/editora.service';

@Component({
  selector: 'app-criar-editora',
  templateUrl: './criar-editora.component.html',
  styleUrls: ['./criar-editora.component.scss']
})
export class CriarEditoraComponent {

  criarEditoraForm: EditoraForm = new EditoraForm();

  @ViewChild("editoraForm")
  editoraForm!: NgForm;
  isSubmitted: boolean = false;

  constructor(private router: Router,  private editoraService: EditoraService, private toastr: ToastrService) { }

  criarEditora(isValid: any){
    this.isSubmitted = true;

    if(isValid){
      this.editoraService.criarEditora(this.criarEditoraForm).subscribe({
        next: async (data) => {
          if (data != null) {
              this.toastr.success("Editora cadastrada com sucesso");
              setTimeout(() => {
                this.router.navigate(['/listarEditoras']);
              }, 500);
          }
        },
        error: async (error) => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/listarEditoras']);
          }, 500);
        }
      });
      
    }

  }
}

export class EditoraForm {
  nome: string = "";
  telefone: string = "";
  email: string = "";
  website: string = "";
}