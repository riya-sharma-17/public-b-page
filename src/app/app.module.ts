import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Angular Google Maps

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { MiddleComponent } from './middle/middle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    RightbarComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AppRoutingModule,
    SplitterModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
