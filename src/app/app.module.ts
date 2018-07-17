import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PagesModule,
    ServicesModule,
    routing
  ]
})
export class AppModule { }
