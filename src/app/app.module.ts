import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    PagesModule,
    ServicesModule,
    routing
  ]
})
export class AppModule { }
