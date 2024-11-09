import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarAutorComponent } from './pages/autor/criar-autor/criar-autor.component';
import { CriarEditoraComponent } from './pages/editora/criar-editora/criar-editora.component';
import { CriarLivroComponent } from './pages/livro/criar-livro/criar-livro.component';
import { AlterarLivroComponent } from './pages/livro/alterar-livro/alterar-livro.component';
import { VisualizarLivroComponent } from './pages/livro/visualizar-livro/visualizar-livro.component';
import { AlterarEditoraComponent } from './pages/editora/alterar-editora/alterar-editora.component';
import { VisualizarEditoraComponent } from './pages/editora/visualizar-editora/visualizar-editora.component';
import { AlterarAutorComponent } from './pages/autor/alterar-autor/alterar-autor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisualizarAutorComponent } from './pages/autor/visualizar-autor/visualizar-autor.component';
import { ListarAutoresComponent } from './pages/autor/listar-autores/listar-autores.component';
import { ListarEditorasComponent } from './pages/editora/listar-editoras/listar-editoras.component';
import { ListarLivrosComponent } from './pages/livro/listar-livros/listar-livros.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    CriarAutorComponent,
    CriarEditoraComponent,
    CriarLivroComponent,
    AlterarLivroComponent,
    VisualizarLivroComponent,
    AlterarEditoraComponent,
    VisualizarEditoraComponent,
    AlterarAutorComponent,
    VisualizarAutorComponent,
    ListarAutoresComponent,
    ListarEditorasComponent,
    ListarLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
