import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';
import { MainComponent } from './main/main.component';
import { ActivityComponent } from './main/activity/activity.component';
import { ActivityFilterPipe } from './activity-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    WeatherComponent,
    MainComponent,
    ActivityComponent,
    ActivityFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
