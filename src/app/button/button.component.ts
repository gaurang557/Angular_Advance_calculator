import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import {OpService} from '../op.service'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  
  @Input() label:any;
  constructor(
    private calculatorservice:CalculatorService,
    private opservice:OpService
  ){}
  onclickbutton():void{
    this.calculatorservice.updatevalue(this.label);
    this.opservice.opserve.next(this.label)
    
  }

  ngOnInit(): void {
  }

}
