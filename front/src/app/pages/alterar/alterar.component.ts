import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {


  tarefaId: number | null = null;

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  atualizarTarefa() {
    this.client.patch(`https://localhost:7015/api/tarefa/alterar/${this.tarefaId}`, {})
      .subscribe({
        //A requição funcionou
        next: (data) => {
          console.log(data)

          this.tarefaId = null;

          this.router.navigate(["pages/tarefa/listar"]);
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
