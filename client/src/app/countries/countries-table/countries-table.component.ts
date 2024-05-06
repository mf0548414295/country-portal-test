import { Component, OnDestroy, OnInit} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectCountries } from '../../states/countries/countries.selector';
import { Subscription } from 'rxjs';
import { Country } from '../../models/country';
import { AppState } from '../../states/app.state';

@Component({
  selector: 'app-countries-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.scss',
})
export class CountriesTableComponent implements OnInit, OnDestroy {
  countries: MatTableDataSource<Country> = new MatTableDataSource<Country>();
  private countriesSubscription = new Subscription();
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {

    this.countriesSubscription = this.store
      .pipe(select(selectCountries))
      .subscribe((countries) => {
        this.countries.data = countries;
      });
  }

  ngOnDestroy() {
    this.countriesSubscription.unsubscribe();
  }
  displayedColumns: string[] = [
    'name',
    'capital',
    'region',
    'subregion',
    'population',
    'details',
  ];

  navigateToDetails(_id: string) {
    this.router.navigate(['details', _id]);
  }
}
