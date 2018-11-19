import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocial {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface IHotel {
  img: string[];
  address: string;
  phone: number;
  title: string;
  weather: IWeather;
  social_info: ISocial;
  type: string;
}

const _data: IHotel[] = [
  {
    'img': ['../assets/img/res.jpg', '../assets/img/r1.jpg'],
    'address': 'Resort Address',
    'phone': 1285968685,
    'title': 'Et harum quidem',
    'weather': {
      'title': 'Et harum quidem',
      'icon': '../assets/img/cloudy.png',
      'water': 23,
      'temperature': 30
    },
    'social_info': {
      'title': 'Et harum quidem',
      'img': '../assets/img/r1.jpg',
      'followers': 3080,
      'following': 100
    },
    'type': 'hotel'
  },
  {
    'img': ['../assets/img/b1.jpg'],
    'address': 'Resort Address',
    'phone': 1285968685,
    'title': 'Et harum quidem',
    'weather': {
      'title': 'Et harum quidem',
      'icon': '../assets/img/cloudy.png',
      'water': 23,
      'temperature': 30
    },
    'social_info': {
      'title': 'Et harum quidem',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'hotel'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Resort Address',
    'phone': 1285968685,
    'title': 'Et harum quidem',
    'weather': {
      'title': 'Et harum quidem',
      'icon': '../assets/img/cloudy.png',
      'water': 23,
      'temperature': 30
    },
    'social_info': {
      'title': 'Et harum quidem',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'hotel'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Resort Address',
    'phone': 1285968685,
    'title': 'Et harum quidem',
    'weather': {
      'title': 'Et harum quidem',
      'icon': '../assets/img/cloudy.png',
      'water': 23,
      'temperature': 30
    },
    'social_info': {
      'title': 'Et harum quidem',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'tours'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Resort Address',
    'phone': 1285968685,
    'title': 'Et harum quidem',
    'weather': {
      'title': 'Et harum quidem',
      'icon': '../assets/img/cloudy.png',
      'water': 23,
      'temperature': 30
    },
    'social_info': {
      'title': 'Et harum quidem',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'weather'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Resort Address',
    'title': 'Et harum quidem',
    'phone': 1285968685,
    'weather': {
      'title': 'Et harum quidem',
      'icon': '../assets/img/cloudy.png',
      'water': 23,
      'temperature': 30
    },
    'social_info': {
      'title': 'Et harum quidem',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'fishing'
  }
];


export const data: Observable<IHotel[]> = of(_data)
  .pipe(
    delay(3000)
  );
