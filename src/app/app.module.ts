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

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ShowEmailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MongodbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
