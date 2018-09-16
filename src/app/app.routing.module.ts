import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { TeamComponent } from '../components/team/team.component';
import { TripReportComponent } from '../components/trip-report/trip-report.component';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'trip-reports', component: TripReportComponent },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
