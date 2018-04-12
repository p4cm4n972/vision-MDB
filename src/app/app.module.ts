import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// MDBootstrap
import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// MAPS
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModules.forRoot(),
    AppRoutingModule,
    // AgmCoreModule.forRoot({ apiKey: 'Your_api_key' })
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
