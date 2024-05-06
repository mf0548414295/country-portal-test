import { createSelector } from "@ngrx/store";
import { AppState } from '../app.state';

export const selectCounterState = (state: AppState) => state.countries;

export const selectCountries=createSelector(
    selectCounterState,
    (state)=>state
)