import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { TeamComponent } from '../components/team/team.component';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
