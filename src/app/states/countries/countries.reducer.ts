import { createReducer, on } from '@ngrx/store';
import { setCountries, updateCountry } from './countries.actions';
import { Country } from '../../models/country';

export const initialCountriesState: Country[] = [];

export const countriesReducer = createReducer(
  initialCountriesState,
  on(setCountries, (_, { value }) => value),
  on(updateCountry, (countries, { value }) =>
      countries.map((country) => (country._id === value._id ? value : country))
  )
);
