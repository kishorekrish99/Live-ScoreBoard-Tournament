import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainnavComponent } from './mainnav/mainnav.component';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LivescoreComponent } from './livescore/livescore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatematchComponent } from './creatematch/creatematch.component';
import { ScoreupdateComponent } from './scoreupdate/scoreupdate.component';
import { BarchartComponent } from './barchart/barchart.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { ErrorComponent } from './error/error.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'mainnav', component: MainnavComponent},
  {path: 'login', component: LoginComponent},
  {path: 'livescore', component: LivescoreComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'creatematch', component: CreatematchComponent},
  {path: 'topic/scoreupdate', component: ScoreupdateComponent},
  {path: 'barchart', component: BarchartComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'scorecard',component: ScorecardComponent},
  {path: 'myprofile', component: MyprofileComponent},
  {path: '**', component: ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
