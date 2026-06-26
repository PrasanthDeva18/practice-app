import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection,  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DI2Service } from './recall/di/di-2.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        
      ])
    ),
    DI2Service
  ]
};
