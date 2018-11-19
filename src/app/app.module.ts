import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VillageComponent } from './village/village.component';
import { WeatherComponent } from './weather/weather.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    WeatherComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
