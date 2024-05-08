import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { setCountries } from '../states/countries/countries.actions';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private store: Store<AppState>) {}
  setCountriesService() {
    const countries: Country[] = [
      {
        _id: '1',
        name: {
          common: 'Moldova',
        },
        capital: 'ee',
        region: 'Europe',
        subregion: 'Eastern Europe',
        population: 2617820,
        flags: {
          png: 'https://flagcdn.com/w320/md.png',
          svg: 'https://flagcdn.com/md.svg',
          alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
        },
      },
      {
        _id: '2',
        name: {
          common: 'Bney-Brak',
        },
        capital: 'bb',
        region: 'Europe',
        subregion: 'Eastern Europe',
        population: 2617820,
        flags: {
          png: 'https://flagcdn.com/w320/md.png',
          svg: 'https://flagcdn.com/md.svg',
          alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
        },
      },
    ];
    this.store.dispatch(setCountries({ value: countries }));
  }
}
