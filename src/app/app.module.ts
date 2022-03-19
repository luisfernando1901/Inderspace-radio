import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MongodbService } from './services/mongodb/mongodb.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './components/player/player.component';
import { ShowEmailsComponent } from './components/show-emails/show-emails.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewStationComponent } from './components/new-station/new-station.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ShowEmailsComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NewStationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  providers: [
    MongodbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
