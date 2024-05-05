import { Routes } from '@angular/router';
import {CountriesModule} from './countries/countries.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule),
  },
];
