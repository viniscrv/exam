import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-nao-concluidas',
  templateUrl: './lista-nao-concluidas.component.html',
  styleUrls: ['./lista-nao-concluidas.component.scss']
})
export class ListaNaoConcluidasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get<Tarefa[]>("https://localhost:7015/api/tarefa/naoconcluidas")
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
}
