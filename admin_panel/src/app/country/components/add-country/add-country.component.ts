import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { CountryService } from '../../country.service';



@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  selectedCar?: number;

    flagList = [
        { id: 1, name: "Enable" },
        { id: 0, name: 'Disable' }
    ];

    addCountry = this.fb.group({
      countryName: ['',  Validators.compose([Validators.required])],
      countryCode: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
  
    })
  
  constructor(private fb: FormBuilder, private countryService: CountryService) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.addCountry)

    if(!this.addCountry.valid) {
      alert("invalid form")
      return
    }

    console.log(this.addCountry.value.countryName)

    let countryName = this.addCountry.value.countryName as string
    let countryCode = this.addCountry.value.countryCode as string
    let status = this.addCountry.value.status as string
 
    this.countryService.addCountry(countryName, countryCode, status ).subscribe(
      (response: any) => { 
        console.log(response)
      },
     (error: any) => {
      console.log(error)
     }
      
    )

  }


}



