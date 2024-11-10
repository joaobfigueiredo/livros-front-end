import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutorService } from 'src/app/core/services/autor.service';

@Component({
  selector: 'app-criar-autor',
  templateUrl: './criar-autor.component.html',
  styleUrls: ['./criar-autor.component.scss']
})
export class CriarAutorComponent {

  criarAutorForm: AutorForm = new AutorForm();

  @ViewChild("autorForm")
  employeeForm!: NgForm;
  isSubmitted: boolean = false;

  constructor(private router: Router,  private autorService: AutorService, private toastr: ToastrService) { }

  criarAutor(isValid: any){
    this.isSubmitted = true;

    if(isValid){
      this.autorService.criarAutor(this.criarAutorForm).subscribe({
        next: async (data) => {
          if (data != null) {
              this.toastr.success("Autor cadastrado com sucesso");
              setTimeout(() => {
                this.router.navigate(['/listarAutores']);
              }, 500);
          }
        },
        error: async (error) => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/listarAutores']);
          }, 500);
        }
      });
      
    }

  }

}

export class AutorForm {
  nome: string = "";
  biografia: string = "";
  nacionalidade: string = "";
}
