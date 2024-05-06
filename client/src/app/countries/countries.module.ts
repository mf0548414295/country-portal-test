import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';
import { provideState } from '@ngrx/store';
import { countriesReducer } from '../states/countries/countries.reducer';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';

@NgModule({
  declarations: [CountriesDetailsComponent],
  imports: [CommonModule, CountriesRoutingModule, AsyncPipe, FormsModule],
  providers: [provideState({ name: 'countries', reducer: countriesReducer })],
})
export class CountriesModule {}
