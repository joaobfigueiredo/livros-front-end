import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditoraService } from 'src/app/core/services/editora.service';

@Component({
  selector: 'app-visualizar-editora',
  templateUrl: './visualizar-editora.component.html',
  styleUrls: ['./visualizar-editora.component.scss']
})
export class VisualizarEditoraComponent implements OnInit{

  idEditora: any;
  detalhesEditora: any = [];

  constructor(private editoraService: EditoraService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idEditora = this.route.snapshot.params['idEditora']; 
    this.obterDetalhesEditoraPorId();
  }

  obterDetalhesEditoraPorId(){
    this.editoraService.obterDetalhesEditoraPorId(this.idEditora).subscribe(
      (data:any) => {
        if(data){
          console.log('editora',data);
          this.detalhesEditora = data;
        }
      },
      (error: any) => { }
    );

  }
}
