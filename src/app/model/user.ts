import {Weather_data} from './weather_data';

export class User {
  constructor(n: string, p: string) {
    this.username = n;
    this.password = p;
    this.cities = [];
  }
  username: string;
  password: string;
  cities: Weather_data[];
}
