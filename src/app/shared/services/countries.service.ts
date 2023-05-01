import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _apicountries: string|undefined;

  constructor(private client: HttpClient) { }

  public GetCountries(): Observable<any> {
    this._apicountries = environment.api + "Countries/GetAllCountries";
    console.log(this._apicountries);
    return this.client.get(this._apicountries);
  }
}
