import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutorService } from 'src/app/core/services/autor.service';

@Component({
  selector: 'app-alterar-autor',
  templateUrl: './alterar-autor.component.html',
  styleUrls: ['./alterar-autor.component.scss']
})
export class AlterarAutorComponent implements OnInit {

  editarAutorForm: AutorForm = new AutorForm();
  
  @ViewChild("autorForm")
  autorForm!: NgForm;

  isSubmitted: boolean = false;
  idAutor: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private autorService: AutorService) { }

  ngOnInit(): void {
    this.idAutor = this.route.snapshot.params['idAutor'];
    this.obterDetalhesAutorPorId();
  }

  obterDetalhesAutorPorId(){
    this.autorService.obterDetalhesAutorPorId(this.idAutor).subscribe(
      (data:any) => {
        if(data){
          this.editarAutorForm.idAutor = data.idAutor;
          this.editarAutorForm.nome = data.nome;
          this.editarAutorForm.biografia = data.biografia;
          this.editarAutorForm.nacionalidade = data.nacionalidade;
        }
      },
      (error: any) => { }
    );
  }

  salvarAutor(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.autorService.salvarAutor(this.editarAutorForm).subscribe({
        next: async (data:any) => {
        if (data != null) {
          this.toastr.success("Autor salvo com sucesso");
              setTimeout(() => {
                this.router.navigate(['/listarAutores']);
              }, 500);
        }
      },
      error:  async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/listarAutores']);
          }, 500);
    }});
    }
  }
}


export class AutorForm {
  idAutor: string = "";
  nome: string = "";
  biografia: string = "";
  nacionalidade: string = "";
}