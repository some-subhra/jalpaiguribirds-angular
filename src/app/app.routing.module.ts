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
    { path: 'index', component: HomeComponent, data: { title: 'Home' } },
    { path: 'team', component: TeamComponent, data: { title: 'Team' } },
    { path: 'trip-reports', component: TripReportComponent, data: { title: 'Trip-Reports' } },
    {
        path: 'all-trip-reports',
        component: AllTripReportsComponent,
        children: [
            { path: '', redirectTo: 'royal-manas', pathMatch: 'full' },
            { path: 'royal-manas', component: RoyalManasComponent, data: { title: 'Royal Manas National Park' } },
        ]
    },
    { path: 'checklist', component: ChecklistComponent, data: { title: 'Checklist' } },
    { path: 'gallery', component: GalleryComponent, data: { title: 'Gallery' } },
    { path: 'hot-spots', component: HotSpotsComponent, data: { title: 'Birding Spots' } },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
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


