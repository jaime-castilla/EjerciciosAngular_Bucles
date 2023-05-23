import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuclesForEj1Component } from './bucles-for-ej1/bucles-for-ej1.component';
import { FormsModule } from '@angular/forms';
import { BuclesForEj2Component } from './bucles-for-ej2/bucles-for-ej2.component';

@NgModule({
  declarations: [
    AppComponent,
    BuclesForEj1Component,
    BuclesForEj2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
