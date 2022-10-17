import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { FormComponent } from '../form/form.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HelloWorldComponent, FormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
