import { Component, OnInit } from '@angular/core';
import { OpService } from '../op.service';

@Component({
  selector: 'app-op',
  templateUrl: './op.component.html',
  styleUrls: ['./op.component.scss']
})
export class OpComponent implements OnInit {
  value:string;

  constructor(
    private opserve:OpService
  ) {
    this.update();
   }

  ngOnInit(): void {
  }
  update(){
    this.opserve.opob.subscribe(
      res=>this.value=res
    )
  }

}
