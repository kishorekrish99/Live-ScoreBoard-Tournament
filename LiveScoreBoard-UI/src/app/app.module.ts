import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LivescoreComponent } from './livescore/livescore.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddteamComponent } from './addteam/addteam.component';
import { CreatematchComponent } from './creatematch/creatematch.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ScoreupdateComponent } from './scoreupdate/scoreupdate.component';
import { HttpClientModule } from '@angular/common/http';
import { BarchartComponent } from './barchart/barchart.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    LoginComponent,
    FooterComponent,
    SpinnerComponent,
    RegisterComponent,
    HomeComponent,
    LivescoreComponent,
    SidebarComponent,
    NavComponent,
    DashboardComponent,
    AddteamComponent,
    CreatematchComponent,
    MyprofileComponent,
    ScoreupdateComponent,
    BarchartComponent,
    StatisticsComponent,
    ScorecardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
