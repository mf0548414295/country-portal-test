import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesTableComponent,
  },
  {
    path: 'details',
    component: CountriesDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
