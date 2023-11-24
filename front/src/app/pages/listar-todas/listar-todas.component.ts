import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-listar-todas',
  templateUrl: './listar-todas.component.html',
  styleUrls: ['./listar-todas.component.scss']
})
export class ListarTodasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.client.get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        //A requição funcionou
        next: (tarefas) => {

          console.log(tarefas)

          this.tarefas = tarefas;
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  irParaListagemGeral() {
    this.router.navigate(["pages/tarefa/listar"]);
  }
  irParaListagemNaoConcluidas() {
    this.router.navigate(["pages/tarefa/listarnaoconcluidas"]);
  }
  irParaListagemConcluidas() {
    this.router.navigate(["pages/tarefa/listarconcluidas"]);
  }
  irParaAlterarStatus() {
    this.router.navigate(["pages/tarefa/alterar"]);
  }
  irParaCadastro() {
    this.router.navigate(["pages/tarefa/cadastrar"]);
  }
}
