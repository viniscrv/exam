import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {


  tarefaId: number = 1;

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  atualizarTarefa() {
    this.client.patch(`https://localhost:7015/api/tarefa/alterar/${this.tarefaId}`, {})
      .subscribe({
        //A requição funcionou
        next: (data) => {
          console.log(data)

          this.tarefaId = 1;

          this.router.navigate(["pages/tarefa/listar"]);
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
