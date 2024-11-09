import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorService } from 'src/app/core/services/autor.service';

@Component({
  selector: 'app-visualizar-autor',
  templateUrl: './visualizar-autor.component.html',
  styleUrls: ['./visualizar-autor.component.scss']
})
export class VisualizarAutorComponent implements OnInit {

  idAutor: any;
  detalhesAutor: any = [];

  constructor(private autorService: AutorService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idAutor = this.route.snapshot.params['idAutor']; 
    this.obterDetalhesAutorPorId();
  }

  obterDetalhesAutorPorId(){
    this.autorService.obterDetalhesAutorPorId(this.idAutor).subscribe(
      (data:any) => {
        if(data){
          this.detalhesAutor = data;
        }
      },
      (error: any) => { }
    );
  }

}
