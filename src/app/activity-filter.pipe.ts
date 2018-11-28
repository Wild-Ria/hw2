import { Pipe, PipeTransform } from '@angular/core';
import {IHotel} from './data';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {
  transform(hotels: IHotel[], activeHotelType: string): IHotel[] {
    if (!activeHotelType) {
      return hotels;
    }
    return hotels.filter((hotel: IHotel) => {
      return hotel.type.toLowerCase().includes(activeHotelType.toLowerCase());
    });
  }

}
