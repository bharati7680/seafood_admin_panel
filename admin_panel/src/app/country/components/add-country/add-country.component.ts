import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
