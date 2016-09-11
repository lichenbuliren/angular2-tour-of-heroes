import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { routing } from './app/app.routing';
import { HeroService } from './app/hero.service';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ 
  routing, 
  HTTP_PROVIDERS, 
  HeroService 
]).catch(err => console.log(err));
