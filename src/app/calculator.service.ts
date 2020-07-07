import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { OpService } from './op.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  counter:number =0;
  value:number=0;operator:string;
  num1:number=0;mem:number=0;
  ops=["+","-","*","/","pow","root"]
  
  calculatorSubject:Subject<number> = new Subject();
  calculatorObservable: Observable<number> = this.calculatorSubject.asObservable();

  constructor(
    private opservice:OpService
  ) { }
  increment(){
    this.counter++;
    console.log(this.counter);
  }
  function(button:any){
    this.value=this.value*10+Number(button)
    this.calculatorSubject.next(this.value)
  }
  updatevalue(button :any){
    if(button==="clear"){
      this.value=0;
      this.calculatorSubject.next(0)
    }else if(button==="sq root"){
      this.value=Math.pow(this.value,(0.5))
      this.calculatorSubject.next(this.value)
    }else if(button==="M+"){
      this.mem+=this.value;
    }else if(button==="M-"){
      this.mem-=this.value;
    }else if(button==="MRS"){
      this.value=this.mem;
      this.calculatorSubject.next(this.mem);
    }
    else if(button==="backspace"){
      this.value=Math.floor(this.value/10)
      this.calculatorSubject.next(this.value)
    }else if(this.ops.includes(button)){
        this.operator=button;
        this.num1=this.value;
        this.value=0
    }else if(button==="enter"){
      if(this.operator===''){
        this.calculatorSubject.next(this.value)
      }else if(this.operator==="pow"){
        this.value=Math.pow(this.num1,this.value)
      }else if(this.operator==="root"){
        this.value=Math.pow(this.num1,(1/this.value))
      }else if(this.operator==="sq root"){
        this.value=Math.pow(this.num1,this.value)
      }else if(this.operator==="+"){
        this.value=(this.num1)+(this.value);
      }else if(this.operator==="-"){
        this.value=this.num1-this.value;
      }else if(this.operator==="*"){
        this.value=this.num1*this.value;
      }else if(this.operator==="/"){
        this.value=this.num1/this.value;
      }
      this.calculatorSubject.next(this.value)
    }    
  }
}