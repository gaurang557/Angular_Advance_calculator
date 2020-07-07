import { Injectable } from '@angular/core';
import {Subject,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OpService {
  opserve:Subject<string>=new Subject();
  opob:Observable<string>=this.opserve.asObservable();
  value:string=''
  constructor() { }
}
