import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoveryProcessModule } from './discovery-process/discovery-process.module';
import { PersonalViewModule } from './personal-view/personal-view.module';
import { TeamViewModule } from './team-view/team-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiscoveryProcessModule,
    PersonalViewModule,
    TeamViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
