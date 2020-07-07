import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ResultComponent } from './result/result.component';
import { ButtonNumComponent } from './button-num/button-num.component';
import { OpComponent } from './op/op.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ResultComponent,
    ButtonNumComponent,
    OpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }