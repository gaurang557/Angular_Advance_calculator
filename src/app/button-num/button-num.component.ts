import { Component, OnInit, Input } from '@angular/core';
import {CalculatorService} from '../calculator.service'

@Component({
  selector: 'app-button-num',
  templateUrl: './button-num.component.html',
  styleUrls: ['./button-num.component.scss']
})
export class ButtonNumComponent implements OnInit {

  @Input() label:any;
  value:number=0;
  constructor(
    private calculatorservice:CalculatorService
  ) { }

  onclickbutton():void{
    this.calculatorservice.value=this.calculatorservice.value*10+Number(this.label);
    this.calculatorservice.calculatorSubject.next(this.calculatorservice.value)
  }
  ngOnInit(): void {
  }

}
