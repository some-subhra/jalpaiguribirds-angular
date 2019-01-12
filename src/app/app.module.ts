import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { TripReportComponent } from './components/trip-report/trip-report.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HotSpotsComponent } from './components/hot-spots/hot-spots.component';
import { AllTripReportsComponent } from './components/all-trip-reports/all-trip-reports.component';
import { RoyalManasComponent } from './components/all-trip-reports/royal-manas/royal-manas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    TripReportComponent,
    ChecklistComponent,
    GalleryComponent,
    HotSpotsComponent,
    RoyalManasComponent,
    AllTripReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
