import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _apiGames = environment.api + "Game";
  
  constructor(private client: HttpClient) { }

  public GetGamesList () : Observable<any> {
    let url = this._apiGames + "/GetNextGames";
    return this.client.get(url);
  }
}
