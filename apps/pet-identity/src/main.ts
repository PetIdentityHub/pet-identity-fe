import { bootstrapApplication } from "@angular/platform-browser";
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { APP_CONFIG } from "@pet-identity/shared";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), 
    {
      provide: APP_CONFIG,
      useValue: environment,
    },
    importProvidersFrom(
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      //logOnly: environment.production,
      autoPause: true,
    })
  ),
],
}).catch((err) => console.error(err));
