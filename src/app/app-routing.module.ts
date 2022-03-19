import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewStationComponent } from './components/new-station/new-station.component';
import { PlayerComponent } from './components/player/player.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowEmailsComponent } from './components/show-emails/show-emails.component';

const routes: Routes = [
  { path: '', component: PlayerComponent, pathMatch: 'full' },
  { path: 'showEmails', component: ShowEmailsComponent },
  { path: 'register',component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'newStation', component: NewStationComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
