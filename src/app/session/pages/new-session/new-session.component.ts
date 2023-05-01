import { Component } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss']
})
export class NewSessionComponent {
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
