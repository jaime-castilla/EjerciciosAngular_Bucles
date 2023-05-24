import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuclesForEj1Component } from './bucles-for-ej1/bucles-for-ej1.component';
import { FormsModule } from '@angular/forms';
import { BuclesForEj2Component } from './bucles-for-ej2/bucles-for-ej2.component';
import { BuclesForEj3Component } from './bucles-for-ej3/bucles-for-ej3.component';
import { BuclesForEj4Component } from './bucles-for-ej4/bucles-for-ej4.component';
import { BuclesForEj5Component } from './bucles-for-ej5/bucles-for-ej5.component';
import { BuclesForEj6Component } from './bucles-for-ej6/bucles-for-ej6.component';
import { BuclesForEj7Component } from './bucles-for-ej7/bucles-for-ej7.component';
import { BuclesForEj8Component } from './bucles-for-ej8/bucles-for-ej8.component';

@NgModule({
  declarations: [
    AppComponent,
    BuclesForEj1Component,
    BuclesForEj2Component,
    BuclesForEj3Component,
    BuclesForEj4Component,
    BuclesForEj5Component,
    BuclesForEj6Component,
    BuclesForEj7Component,
    BuclesForEj8Component
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
