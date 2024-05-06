import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { selectCountries } from '../../states/countries/countries.selector';
import { updateCountry } from '../../states/countries/countries.actions';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrl: './countries-details.component.scss',
})
export class CountriesDetailsComponent implements OnInit {
  countries: Observable<Country[]>;
  selectedCountry: Country | undefined;
  populationValue: number | undefined;
  capitalValue: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.countries = this.store.select(selectCountries);
  }

  onSave() {
    this.selectedCountry = {
      ...this.selectedCountry!,
      population: this.populationValue!,
      capital: this.capitalValue!,
    };
    //עדכון בבקאנד
  }

  onExit() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.countries.subscribe((countries) => {
        this.selectedCountry = countries.find((country) => country._id === id);
        this.populationValue = this.selectedCountry?.population;
        this.capitalValue = this.selectedCountry?.capital;
      });
    });
  }
}
