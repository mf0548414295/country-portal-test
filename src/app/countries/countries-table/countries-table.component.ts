import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.scss',
})
export class CountriesTableComponent {
  constructor(private _router: Router) {}
  displayedColumns: string[] = [
    'name',
    'capital',
    'region',
    'subregion',
    'population',
    'details',
  ];
  countries = [
    {
      name: {
        common: 'Moldova',
        official: 'Republic of Moldova',
        nativeName: {
          ron: {
            official: 'Republica Moldova',
            common: 'Moldova',
          },
        },
      },
      tld: ['.md'],
      cca2: 'MD',
      ccn3: '498',
      cca3: 'MDA',
      cioc: 'MDA',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        MDL: {
          name: 'Moldovan leu',
          symbol: 'L',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['73'],
      },
      capital: ['Chișinău'],
      altSpellings: [
        'MD',
        'Moldova, Republic of',
        'Republic of Moldova',
        'Republica Moldova',
      ],
      region: 'Europe',
      subregion: 'Eastern Europe',
      languages: {
        ron: 'Romanian',
      },
      translations: {
        ara: {
          official: 'جمهورية مولدوڤا',
          common: 'مولدوڤا',
        },
        bre: {
          official: 'Republik Moldova',
          common: 'Moldova',
        },
        ces: {
          official: 'Moldavská republika',
          common: 'Moldavsko',
        },
        cym: {
          official: 'Republic of Moldova',
          common: 'Moldova',
        },
        deu: {
          official: 'Republik Moldau',
          common: 'Moldawien',
        },
        est: {
          official: 'Moldova Vabariik',
          common: 'Moldova',
        },
        fin: {
          official: 'Moldovan tasavalta',
          common: 'Moldova',
        },
        fra: {
          official: 'République de Moldavie',
          common: 'Moldavie',
        },
        hrv: {
          official: 'Moldavija',
          common: 'Moldova',
        },
        hun: {
          official: 'Moldovai Köztársaság',
          common: 'Moldova',
        },
        ita: {
          official: 'Repubblica di Moldova',
          common: 'Moldavia',
        },
        jpn: {
          official: 'モルドバ共和国',
          common: 'モルドバ共和国',
        },
        kor: {
          official: '몰도바 공화국',
          common: '몰도바',
        },
        nld: {
          official: 'Republiek Moldavië',
          common: 'Moldavië',
        },
        per: {
          official: 'جمهوری مولداوی',
          common: 'مولداوی',
        },
        pol: {
          official: 'Republika Mołdawii',
          common: 'Mołdawia',
        },
        por: {
          official: 'República da Moldávia',
          common: 'Moldávia',
        },
        rus: {
          official: 'Молдова',
          common: 'Молдавия',
        },
        slk: {
          official: 'Moldavská republika',
          common: 'Moldavsko',
        },
        spa: {
          official: 'República de Moldova',
          common: 'Moldavia',
        },
        srp: {
          official: 'Република Молдавија',
          common: 'Молдавија',
        },
        swe: {
          official: 'Republiken Moldavien',
          common: 'Moldavien',
        },
        tur: {
          official: 'Moldova Cumhuriyeti',
          common: 'Moldova',
        },
        urd: {
          official: 'جمہوریہ مالدووا',
          common: 'مالدووا',
        },
        zho: {
          official: '摩尔多瓦共和国',
          common: '摩尔多瓦',
        },
      },
      latlng: [47, 29],
      landlocked: true,
      borders: ['ROU', 'UKR'],
      area: 33846,
      demonyms: {
        eng: {
          f: 'Moldovan',
          m: 'Moldovan',
        },
        fra: {
          f: 'Moldave',
          m: 'Moldave',
        },
      },
      flag: '🇲🇩',
      maps: {
        googleMaps: 'https://goo.gl/maps/JjmyUuULujnDeFPf7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/58974',
      },
      population: 2617820,
      gini: {
        '2018': 25.7,
      },
      fifa: 'MDA',
      car: {
        signs: ['MD'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/md.png',
        svg: 'https://flagcdn.com/md.svg',
        alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/md.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/md.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [47.01, 28.9],
      },
      postalCode: {
        format: 'MD-####',
        regex: '^(?:MD)*(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Moldova',
        official: 'Republic of Moldova',
        nativeName: {
          ron: {
            official: 'Republica Moldova',
            common: 'Moldova',
          },
        },
      },
      tld: ['.md'],
      cca2: 'MD',
      ccn3: '498',
      cca3: 'MDA',
      cioc: 'MDA',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        MDL: {
          name: 'Moldovan leu',
          symbol: 'L',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['73'],
      },
      capital: ['Chișinău'],
      altSpellings: [
        'MD',
        'Moldova, Republic of',
        'Republic of Moldova',
        'Republica Moldova',
      ],
      region: 'Europe',
      subregion: 'Eastern Europe',
      languages: {
        ron: 'Romanian',
      },
      translations: {
        ara: {
          official: 'جمهورية مولدوڤا',
          common: 'مولدوڤا',
        },
        bre: {
          official: 'Republik Moldova',
          common: 'Moldova',
        },
        ces: {
          official: 'Moldavská republika',
          common: 'Moldavsko',
        },
        cym: {
          official: 'Republic of Moldova',
          common: 'Moldova',
        },
        deu: {
          official: 'Republik Moldau',
          common: 'Moldawien',
        },
        est: {
          official: 'Moldova Vabariik',
          common: 'Moldova',
        },
        fin: {
          official: 'Moldovan tasavalta',
          common: 'Moldova',
        },
        fra: {
          official: 'République de Moldavie',
          common: 'Moldavie',
        },
        hrv: {
          official: 'Moldavija',
          common: 'Moldova',
        },
        hun: {
          official: 'Moldovai Köztársaság',
          common: 'Moldova',
        },
        ita: {
          official: 'Repubblica di Moldova',
          common: 'Moldavia',
        },
        jpn: {
          official: 'モルドバ共和国',
          common: 'モルドバ共和国',
        },
        kor: {
          official: '몰도바 공화국',
          common: '몰도바',
        },
        nld: {
          official: 'Republiek Moldavië',
          common: 'Moldavië',
        },
        per: {
          official: 'جمهوری مولداوی',
          common: 'مولداوی',
        },
        pol: {
          official: 'Republika Mołdawii',
          common: 'Mołdawia',
        },
        por: {
          official: 'República da Moldávia',
          common: 'Moldávia',
        },
        rus: {
          official: 'Молдова',
          common: 'Молдавия',
        },
        slk: {
          official: 'Moldavská republika',
          common: 'Moldavsko',
        },
        spa: {
          official: 'República de Moldova',
          common: 'Moldavia',
        },
        srp: {
          official: 'Република Молдавија',
          common: 'Молдавија',
        },
        swe: {
          official: 'Republiken Moldavien',
          common: 'Moldavien',
        },
        tur: {
          official: 'Moldova Cumhuriyeti',
          common: 'Moldova',
        },
        urd: {
          official: 'جمہوریہ مالدووا',
          common: 'مالدووا',
        },
        zho: {
          official: '摩尔多瓦共和国',
          common: '摩尔多瓦',
        },
      },
      latlng: [47, 29],
      landlocked: true,
      borders: ['ROU', 'UKR'],
      area: 33846,
      demonyms: {
        eng: {
          f: 'Moldovan',
          m: 'Moldovan',
        },
        fra: {
          f: 'Moldave',
          m: 'Moldave',
        },
      },
      flag: '🇲🇩',
      maps: {
        googleMaps: 'https://goo.gl/maps/JjmyUuULujnDeFPf7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/58974',
      },
      population: 2617820,
      gini: {
        '2018': 25.7,
      },
      fifa: 'MDA',
      car: {
        signs: ['MD'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/md.png',
        svg: 'https://flagcdn.com/md.svg',
        alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/md.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/md.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [47.01, 28.9],
      },
      postalCode: {
        format: 'MD-####',
        regex: '^(?:MD)*(\\d{4})$',
      },
    },
  ];

  navigateToDetails() {
    this._router.navigate(['details']);
  }
}
