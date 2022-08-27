import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ImguploadComponent} from './imgupload/imgupload.component' ;

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,ImguploadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
