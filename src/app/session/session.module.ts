import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionLayoutComponent } from './layout/session-layout/session-layout.component';
import { NewSessionComponent } from './pages/new-session/new-session.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { NextGamesComponent } from './pages/next-games/next-games.component';


@NgModule({
  declarations: [
    SessionLayoutComponent,
    NewSessionComponent,
    NextGamesComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SessionModule { }
