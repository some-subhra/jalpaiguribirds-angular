import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { Routes, RouterModule, Router, NavigationEnd } from '../../node_modules/@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { TripReportComponent } from './components/trip-report/trip-report.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HotSpotsComponent } from './components/hot-spots/hot-spots.component';
import { AllTripReportsComponent } from './components/all-trip-reports/all-trip-reports.component';
import { RoyalManasComponent } from './components/all-trip-reports/royal-manas/royal-manas.component';



const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'trip-reports', component: TripReportComponent },
    {
        path: 'all-trip-reports',
        component: AllTripReportsComponent,
        children: [
            { path: '', redirectTo: 'royal-manas', pathMatch: 'full' },
            { path: 'royal-manas', component: RoyalManasComponent },
        ]
    },
    { path: 'checklist', component: ChecklistComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'hot-spots', component: HotSpotsComponent },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {
    constructor(private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                var isExpanded = $('.navbar-toggler').attr('aria-expanded') === 'true';
                if (isExpanded) {
                    $('.navbar-toggler').click();
                }
            }
        });
    }
}


