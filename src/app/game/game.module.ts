import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameLayoutComponent } from './layout/game-layout/game-layout.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    GameLayoutComponent,
    NewGameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule
  ]
})
export class GameModule { }
