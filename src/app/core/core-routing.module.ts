import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bet',
    loadChildren:() => import('./../bet/bet.module').then(m => m.BetModule)
  },
  {
    path: 'game',
    loadChildren:() => import('./../game/game.module').then(m => m.GameModule)
  },
  {
    path: 'session',
    loadChildren:() => import('./../session/session.module').then(m => m.SessionModule)
  },
  {
    path: '',
    redirectTo: 'session',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
