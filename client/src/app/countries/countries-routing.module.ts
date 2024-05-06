import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountriesModule } from './countries.module';
import { CountriesGuard } from '../guards/countries.guard';

const routes: Routes = [
  {
    path: '',
    component: CountriesTableComponent,
    canActivate: [CountriesGuard],
  },
  {
    path: 'details/:id',
    component: CountriesDetailsComponent,
    canActivate: [CountriesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
