import { Injectable } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesGuard {
  constructor(private countriesService: CountriesService) {}

  canActivate(): boolean {
    this.countriesService.setCountriesService();
    return true;
  }
}
