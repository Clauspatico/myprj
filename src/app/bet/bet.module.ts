import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetLayoutComponent } from './layout/bet-layout/bet-layout.component';
import { NewBetComponent } from './pages/new-bet/new-bet.component';


@NgModule({
  declarations: [
    BetLayoutComponent,
    NewBetComponent
  ],
  imports: [
    CommonModule,
    BetRoutingModule
  ]
})
export class BetModule { }
