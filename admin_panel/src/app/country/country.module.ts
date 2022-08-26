import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { CountryListComponent } from './components/country-list/country-list.component';



@NgModule({
  declarations: [
    AddCountryComponent,
    CountryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
