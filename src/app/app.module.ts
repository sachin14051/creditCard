import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/components/card/card.component';

import {MatInputModule} from '@angular/material/input';
import { CreditDirective } from './shared/components/card/directive/credit.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CreditDirective
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
