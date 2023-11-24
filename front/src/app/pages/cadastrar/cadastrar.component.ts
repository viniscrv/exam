import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  tituloTarefa: string = "";
  descricaoTarefa: string = "";

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  atualizarTarefa() {
    let tarefa: Tarefa = {
      Titulo: this.tituloTarefa,
      Descricao: this.descricaoTarefa,
      Status: "Não iniciada",
      CategoriaId: 1
    }

    this.client.post<Tarefa>("https://localhost:7015/api/tarefa/cadastrar", tarefa)
      .subscribe({
        //A requição funcionou
        next: (data) => {
          console.log(data)

          this.tituloTarefa = "";
          this.descricaoTarefa = "";

          this.router.navigate(["pages/tarefa/listar"]);
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
