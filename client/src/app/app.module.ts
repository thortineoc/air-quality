import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MapPageComponent,
    ChartsPageComponent,
    StatsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
