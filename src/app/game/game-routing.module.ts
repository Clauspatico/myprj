import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLayoutComponent } from './layout/game-layout/game-layout.component';
import { NewGameComponent } from './pages/new-game/new-game.component';

const routes: Routes = [
  {
    path:'', component:GameLayoutComponent, children: [
      { path: 'new-game', component: NewGameComponent },
      { path: '', redirectTo: 'new-game', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
