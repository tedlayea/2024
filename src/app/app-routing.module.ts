import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FebonachiComponent } from './febonachi/febonachi.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dasboard', component:DashboardComponent,canActivate: [AuthService],},
  {path:'febonachi', component:FebonachiComponent,canActivate: [AuthService]},
  {path:'anagram', component:AnagramComponent,canActivate: [AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
