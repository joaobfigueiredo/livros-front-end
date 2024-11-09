import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisualizarAutorComponent } from './pages/autor/visualizar-autor/visualizar-autor.component';
import { CriarAutorComponent } from './pages/autor/criar-autor/criar-autor.component';
import { AlterarAutorComponent } from './pages/autor/alterar-autor/alterar-autor.component';
import { VisualizarEditoraComponent } from './pages/editora/visualizar-editora/visualizar-editora.component';
import { CriarEditoraComponent } from './pages/editora/criar-editora/criar-editora.component';
import { AlterarEditoraComponent } from './pages/editora/alterar-editora/alterar-editora.component';
import { VisualizarLivroComponent } from './pages/livro/visualizar-livro/visualizar-livro.component';
import { CriarLivroComponent } from './pages/livro/criar-livro/criar-livro.component';
import { AlterarLivroComponent } from './pages/livro/alterar-livro/alterar-livro.component';
import { ListarAutoresComponent } from './pages/autor/listar-autores/listar-autores.component';
import { ListarEditorasComponent } from './pages/editora/listar-editoras/listar-editoras.component';
import { ListarLivrosComponent } from './pages/livro/listar-livros/listar-livros.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },

    //Rotas do autor
    { path: 'visualizarAutor/:idAutor', component: VisualizarAutorComponent },
    { path: 'listarAutores', component: ListarAutoresComponent },
    { path: 'criarAutor', component: CriarAutorComponent },
    { path: 'alterarAutor/:idAutor', component: AlterarAutorComponent }, 

    //Rotas da editora
    { path: 'visualizarEditora/:idEditora', component: VisualizarEditoraComponent },
    { path: 'listarEditoras', component: ListarEditorasComponent },
    { path: 'criarEditora', component: CriarEditoraComponent },
    { path: 'alterarEditora/:idEditora', component: AlterarEditoraComponent },   

    //Rotas do livro
    { path: 'visualizarLivro/:idLivro', component: VisualizarLivroComponent },
    { path: 'listarLivros', component: ListarLivrosComponent },
    { path: 'criarLivro', component: CriarLivroComponent },
    { path: 'alterarLivro/:idLivro', component: AlterarLivroComponent },       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
