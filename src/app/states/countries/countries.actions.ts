import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country';
export const setCountries = createAction(
  '[Value] setCountries',
  props<{ value: Country[] }>()
);

export const updateCountry = createAction(
  '[Value] updateCountry',
  props<({ value: Country })>()
);