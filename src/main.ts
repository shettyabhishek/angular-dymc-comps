import { enableProdMode } from '@angular/core';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appConfig } from './app/app.config';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule,{ngZone: "noop"})
//platformBrowserDynamic().bootstrapModule(AppModule)
  //.catch(err => console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

