import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-listar-todas',
  templateUrl: './listar-todas.component.html',
  styleUrls: ['./listar-todas.component.scss']
})
export class ListarTodasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient) { }

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

}
