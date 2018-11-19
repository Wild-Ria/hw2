import {Component, Input, ViewEncapsulation} from '@angular/core';
import {data, IWeather} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @Input
  public weather: IWeather;

  public hotels$ = data;

}
