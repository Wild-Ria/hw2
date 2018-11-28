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
    'address': 'Hotel 1 Address',
    'phone': 1285968685,
    'title': 'Hotel 1',
    'weather': {
      'title': 'Hotel 1',
      'icon': '../assets/img/cloudy.png',
      'water': 21,
      'temperature': 31
    },
    'social_info': {
      'title': 'Hotel 1',
      'img': '../assets/img/r1.jpg',
      'followers': 3080,
      'following': 100
    },
    'type': 'hotel'
  },
  {
    'img': ['../assets/img/b1.jpg'],
    'address': 'Hotel 2 Address',
    'phone': 2284968685,
    'title': 'Hotel 2',
    'weather': {
      'title': 'Hotel 2',
      'icon': '../assets/img/cloudy.png',
      'water': 23,
      'temperature': 30
    },
    'social_info': {
      'title': 'Hotel 2',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'hotel'
  },
  {
    'img': ['../assets/img/b1.jpg'],
    'address': 'Hotel 3 Address',
    'phone': 2284968685,
    'title': 'Hotel 3',
    'weather': {
      'title': 'Hotel 3',
      'icon': '../assets/img/cloudy.png',
      'water': 25,
      'temperature': 31.4
    },
    'social_info': {
      'title': 'Hotel 3',
      'img': '../assets/img/r1.jpg',
      'followers': 1800,
      'following': 1900
    },
    'type': 'hotel'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Fishing 1 Address',
    'phone': 1285968685,
    'title': 'Fishing 1',
    'weather': {
      'title': 'Fishing 1',
      'icon': '../assets/img/rainy.png',
      'water': 13,
      'temperature': 19
    },
    'social_info': {
      'title': 'Fishing 1',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'fishing'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Tours 1 Address',
    'phone': 5385923685,
    'title': 'Tours 1',
    'weather': {
      'title': 'Tours 1',
      'icon': '../assets/img/sunny.png',
      'water': 17,
      'temperature': 28
    },
    'social_info': {
      'title': 'Tours 1',
      'img': '../assets/img/r1.jpg',
      'followers': 28,
      'following': 10
    },
    'type': 'tours'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Tours 2 Address',
    'phone': 5385923685,
    'title': 'Tours 2',
    'weather': {
      'title': 'Tours 2',
      'icon': '../assets/img/sunny.png',
      'water': 19,
      'temperature': 28
    },
    'social_info': {
      'title': 'Tours 2',
      'img': '../assets/img/r1.jpg',
      'followers': 2900,
      'following': 1000
    },
    'type': 'tours'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Weather 1 Address',
    'phone': 5385962285,
    'title': 'Weather 1',
    'weather': {
      'title': 'Weather 1',
      'icon': '../assets/img/cloudy.png',
      'water': 19.5,
      'temperature': 25
    },
    'social_info': {
      'title': 'Weather 1',
      'img': '../assets/img/r1.jpg',
      'followers': 850,
      'following': 675
    },
    'type': 'weather'
  },
  {
    'img': ['../assets/img/1.jpg'],
    'address': 'Fishing 2 Address',
    'title': 'Fishing 2',
    'phone': 7385963685,
    'weather': {
      'title': 'Fishing 2',
      'icon': '../assets/img/cloudy.png',
      'water': 30,
      'temperature': 37
    },
    'social_info': {
      'title': 'Fishing 2',
      'img': '../assets/img/r1.jpg',
      'followers': 2850,
      'following': 675
    },
    'type': 'fishing'
  }
];


export const data: Observable<IHotel[]> = of(_data)
  .pipe(
    delay(2000)
  );
