import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';

const routes: Routes = [
  { path: 'charts', component: ChartsPageComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'statistics', component: StatsPageComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
