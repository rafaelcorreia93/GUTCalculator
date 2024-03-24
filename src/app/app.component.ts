import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,NgbProgressbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GUTcalculator';
  relevanciaList = [
    {
      title: 'Não é importante',
      value: 1
    },
    {
      title: 'Desejável, seria bom ter',
      value: 2
    },
    {
      title: 'Importante',
      value: 3
    },
    {
      title: 'Muito importante',
      value: 4
    },
    {
      title: 'É vital e tem muito valor',
      value: 5
    },
  ];
  urgenciaList = [
    {
      title: 'Implementar agora não faz diferença',
      value: 1
    },
    {
      title: 'Não é confortável, mas podemos esperar',
      value: 2
    },
    {
      title: 'É muito desconfortável, melhor implementar na próxima release',
      value: 3
    },
    {
      title: 'É urgente, teremos problemas se não melhor implementar na próxima release',
      value: 4
    },
    {
      title: 'É urgentíssimo, não podemos esperar',
      value: 5
    },
  ];
  tendenciaList = [
    {
      title: 'A impressão não é boa, mas o usuário se acostuma',
      value: 1
    },
    {
      title: 'Pode ser problemático continuar sem isso',
      value: 2
    },
    {
      title: 'Teremos problemas se não implementarmos',
      value: 3
    },
    {
      title: 'Quanto mais tempo passa, mais complicado fica',
      value: 4
    },
    {
      title: 'Piora a cada dia, extremamente desgastante',
      value: 5
    },
  ];
  selectRelevancia = 1;
  selectUrgencia = 1;
  selectTendencia = 1;
  result = 0;
  gravidade = 'baixa';

  calculate(): void {
    this.result = this.selectRelevancia * this.selectUrgencia * this.selectTendencia;
    if (this.result > 0 && this.result <= 40) { this.gravidade = 'baixa'};
    if (this.result > 40 && this.result <= 70) { this.gravidade = 'mediana'};
    if (this.result > 70 && this.result <= 100) { this.gravidade = 'alta'};
    if (this.result > 100 && this.result <= 125) { this.gravidade = 'urgente'};
  }
}
