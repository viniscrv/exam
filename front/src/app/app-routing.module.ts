import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTodasComponent } from './pages/listar-todas/listar-todas.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { AlterarComponent } from './pages/alterar/alterar.component';
import { ListaConcluidasComponent } from './pages/lista-concluidas/lista-concluidas.component';
import { ListaNaoConcluidasComponent } from './pages/lista-nao-concluidas/lista-nao-concluidas.component';

const routes: Routes = [
  {
    path: "",
    component: ListarTodasComponent,
  },
  {
    path: "pages/tarefa/listar",
    component: ListarTodasComponent,
  },
  {
    path: "pages/tarefa/cadastrar",
    component: CadastrarComponent,
  },
  {
    path: "pages/tarefa/alterar",
    component: AlterarComponent,
  },
  {
    path: "pages/tarefa/listarconcluidas",
    component: ListaConcluidasComponent,
  },
  {
    path: "pages/tarefa/listarnaoconcluidas",
    component: ListaNaoConcluidasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
