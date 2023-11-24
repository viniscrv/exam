import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTodasComponent } from './pages/listar-todas/listar-todas.component';
import { ListaNaoConcluidasComponent } from './pages/lista-nao-concluidas/lista-nao-concluidas.component';
import { ListaConcluidasComponent } from './pages/lista-concluidas/lista-concluidas.component';
import { AlterarComponent } from './pages/alterar/alterar.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTodasComponent,
    ListaNaoConcluidasComponent,
    ListaConcluidasComponent,
    AlterarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
