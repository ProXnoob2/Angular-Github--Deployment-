import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MyFollowersComponent } from './Components/my-followers/my-followers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'followers', component: MyFollowersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
