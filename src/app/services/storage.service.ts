import { Injectable } from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  newUser(username: string) {
    const user: User = new User(username);
    sessionStorage.setItem(username, user.cities.toString());
  }

  getCitiesOf(username: string) {
    return sessionStorage.getItem(username).split(',');
  }

  addCity(username: string, cityName: string) {
    let cities: string[] = sessionStorage.getItem(username).split(',');
    cities.push(cityName);
    sessionStorage.setItem(username, cities.toString());
  }

  deleteCity(username: string, city: string) {
    const cities = sessionStorage.getItem(username).toString().split(',').filter(h => h !== city);
    sessionStorage.setItem(username, cities.toString());
  }
}
