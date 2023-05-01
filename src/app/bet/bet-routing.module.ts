import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetLayoutComponent } from './layout/bet-layout/bet-layout.component';
import { NewBetComponent } from './pages/new-bet/new-bet.component';

const routes: Routes = [
  {
    path: '',
    component:BetLayoutComponent,
    children: [
      {
        path: 'new-bet',
        component:NewBetComponent
      },
      {
        path: '',
        redirectTo: 'new-bet',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetRoutingModule { }
