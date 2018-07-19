import { BrowserModule } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
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
    BrowserModule.withServerTransition({ appId: 'angular-fun' }),
    ComponentsModule,
    HttpClientModule,
    PagesModule,
    ServicesModule,
    routing
  ]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: String
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';

    console.log(`Running ${platform} with appId=${appId}`);
  }

}
