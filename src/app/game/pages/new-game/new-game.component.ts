import {Component} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { Countries } from 'src/app/shared/models/countries';

import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent {
  
  formControl: FormControl = new FormControl('');
  countries: Countries[] | undefined;

  constructor(private countriesService: CountriesService ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.countriesService.GetCountries().subscribe(p => {
      this.countries = p.result;
      console.log(this.countries);
    })
  }
}
