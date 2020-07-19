import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { GoOrganicModule } from './app/goorganic.module';
import { environment } from './environments/environment';
import 'core-js/es';
import 'zone.js/dist/zone';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GoOrganicModule, {preserveWhitespaces: true})
  .catch(err => console.error(err));
