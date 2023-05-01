import { Component } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-next-games',
  templateUrl: './next-games.component.html',
  styleUrls: ['./next-games.component.scss']
})
export class NextGamesComponent {
  games: Game[] | undefined;

  constructor(private srvGame: GamesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.srvGame.GetGamesList().subscribe(g => {
      this.games = g.result;
      console.log(this.games);
    })
  }
}
