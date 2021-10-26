import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoveryProcessModule } from './discovery-process/discovery-process.module';
import { CommonServicesModule } from './common-services/common-services.module';
import { PersonalViewModule } from './personal-view/personal-view.module';
import { TeamViewModule } from './team-view/team-view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonServicesModule,
    DiscoveryProcessModule,
    PersonalViewModule,
    TeamViewModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
