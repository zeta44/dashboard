import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 10],
    ['Julho', 14],
    ['Agosto', 33],
    ['Setembro', 50],
    ['Outubro', 3],
    ['Novembro', 71],
    ['Dezembro', 10]
  ];


  constructor() { }

  obterDados(): Observable<any> {

    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })

  }

}
