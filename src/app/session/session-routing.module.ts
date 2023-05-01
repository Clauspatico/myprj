import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionLayoutComponent } from './layout/session-layout/session-layout.component';
import { NewSessionComponent } from './pages/new-session/new-session.component';
import { NextGamesComponent } from './pages/next-games/next-games.component';

const routes: Routes = [
  {
    path: '',
    component: SessionLayoutComponent,
    children: [
      {
        path: 'new-session',
        component: NewSessionComponent
      },
      {
        path: 'next-games',
        component: NextGamesComponent
      },
      {
        path: '',
        redirectTo: 'next-games',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
