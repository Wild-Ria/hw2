import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  @Input()
  public hotels: IHotel[];
  @Input()
  public hotel: IHotel;

  @Output()
  public onActivityChange: EventEmitter<string> = new EventEmitter<string>();

  public uniqueActivities: any;

  constructor() { }

  ngOnInit() {

    const result = [];

    this.hotels.forEach((hotel: IHotel) => {
        result.push(hotel.type);
      });

    this.uniqueActivities = Array.from(new Set(result));

  }

  public change(activityType: string): void {
    this.onActivityChange.emit(activityType);
  }

}
