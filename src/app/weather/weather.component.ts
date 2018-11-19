import {Component, Input} from '@angular/core';
import { IWeather } from '../data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  @Input()
  public weather: IWeather;
}
