import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { MyFollowersComponent } from './Components/my-followers/my-followers.component';
import { DataService } from './Services/data/data.service';
import { MyFollowersService } from './Services/my-followers/my-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeComponent,
    MyFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    MyFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
