import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiMethod } from '../common/services/consts';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  httpservice: any;

  constructor() { }

  addCountry(countryName: string, countryCode: string, status: string) {

    const body = {
      countryName: countryName,
      countryCode: countryCode,
      status: status
    }

    return this.httpservice.requestCall("/api/admin/country", ApiMethod.POST, body)
     .pipe(map(data => {
       return data
     }))
  }
}
