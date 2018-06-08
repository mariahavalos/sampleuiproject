import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { 
  MatButtonModule,
  MatRadioModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatDividerModule,
  MatBadgeModule,

 } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatSidenavModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatStepperModule,
    MatDividerModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
