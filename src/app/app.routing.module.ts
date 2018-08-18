import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { HomeComponent } from './components/home-component/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full'},
    { path: '**',redirectTo: 'index'},
    { path: 'index', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
