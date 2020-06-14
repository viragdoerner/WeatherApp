import {Weather_data} from './weather_data';
import {Weather_forecast} from './weather_forecast';

export class Weather {
  constructor(d: Weather_data, f: Weather_forecast) {
    this.data = d;
    this.forecast = f;
  }
  data: Weather_data;
  forecast: Weather_forecast;
}
