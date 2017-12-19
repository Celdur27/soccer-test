import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SoccerComponent } from './soccer/soccer.component';
import { SoccerPlayerComponent } from './soccer-player/soccer-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SoccerComponent,
    SoccerPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
