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
        independent: true,
        status: 'officially-assigned',
        unMember: true,
        capital: 'ee',
        region: 'Europe',
        subregion: 'Eastern Europe',
        languages: {
          ron: 'Romanian',
        },
        population: 2617820,
        flags: {
          png: 'https://flagcdn.com/w320/md.png',
          svg: 'https://flagcdn.com/md.svg',
          alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
        },
        startOfWeek: 'monday',
      },
      {
        _id: '2',
        name: {
          common: 'Bney-Brak',
        },
        independent: true,
        status: 'officially-assigned',
        unMember: true,
        capital: 'bb',
        region: 'Europe',
        subregion: 'Eastern Europe',
        languages: {
          ron: 'Romanian',
        },
        population: 2617820,
        flags: {
          png: 'https://flagcdn.com/w320/md.png',
          svg: 'https://flagcdn.com/md.svg',
          alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
        },
        startOfWeek: 'monday',
      },
    ];
    this.store.dispatch(setCountries({ value: countries }));
  }
}
