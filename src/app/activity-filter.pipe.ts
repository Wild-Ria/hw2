import { Pipe, PipeTransform } from '@angular/core';
import {IHotel} from './data';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {
  transform(hotels: IHotel[], activeHotelType: string): IHotel[] {
    console.log(activeHotelType);
    if (!activeHotelType) {
      return hotels;
    }
    return hotels.filter((hotel: IHotel) => {
      console.log(JSON.stringify(hotel.type.toLowerCase().includes(activeHotelType.toLowerCase())));
      return hotel.type.toLowerCase().includes(activeHotelType.toLowerCase());
    });
  }

}
