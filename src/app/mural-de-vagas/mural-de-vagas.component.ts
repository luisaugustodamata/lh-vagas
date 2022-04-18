import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { vagas } from '../models/vagas.model';

@Component({
  selector: 'app-mural-de-vagas',
  templateUrl: './mural-de-vagas.component.html',
  styleUrls: ['./mural-de-vagas.component.css']
})
export class MuralDeVagasComponent implements OnInit {

  public vagas: vagas[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            item => {
              return new vagas(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.salario
              );
            }
          )
        }
      )
  }
}
