import { Injectable } from '@angular/core';
import {Weather_data} from '../model/weather_data';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL_CURRENT_1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private BASE_URL_CURRENT_2 = '&units=metric&appid=b220f08e2ecfed3f608941f274503572';

  private BASE_URL_FORECAST_1 =  'http://api.openweathermap.org/data/2.5/forecast?q=';
  private BASE_URL_FORECAST_2 =  '&units=metric&appid=b220f08e2ecfed3f608941f274503572';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string) {
    return this.http.get(this.BASE_URL_CURRENT_1 + city + this.BASE_URL_CURRENT_2);
  }

  getWeatherData(jsonObject): Weather_data {
    const w = new Weather_data(
      jsonObject.name,
      jsonObject.weather[0].description,
      jsonObject.main.temp,
      jsonObject.main.humidity,
      jsonObject.main.pressure,
      jsonObject.wind.deg,
      jsonObject.wind.speed);
    return w;
  }
}
