import { Component, Input } from '@angular/core';
import {IHotel} from '../../data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent{
  @Input()
  public hotel: IHotel;

}
