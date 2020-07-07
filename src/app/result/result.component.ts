import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultvalue:number=0;
  ob:Observable<number>=this.calculatorservice.calculatorObservable
  constructor(
    private calculatorservice:CalculatorService
  ) { 
    this.initialize()
  }

  ngOnInit(): void {
  }
  initialize(){
    this.ob.subscribe(
      resul=>this.resultvalue =resul
    )
  }

}
