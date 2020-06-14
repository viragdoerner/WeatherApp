import {Weather_data} from './weather_data';

export class User {
  constructor(n: string) {
    this.username = n;
    this.cities = ['Budapest'];
  }
  username: string;
  password: string;
  cities: string[];
}
