import {Component, OnInit} from '@angular/core';
import {Weather_data} from './model/weather_data';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weathers: Weather_data[] = [];
  currentTab = 'Budapest';

  constructor( private apiService: ApiService) { }
  ngOnInit(): void {
    this.getWeatherOf('Budapest');
  }
  changeTab(tab: string) {
      this.currentTab = tab;
  }

  onDeleteTab(city: string) {
    this.weathers = this.weathers.filter(rowObj => rowObj.city !== city);
    if (this.weathers.length !== 0) {
    this.changeTab(this.weathers[0].city);
    }
  }

  onAddTab(cityName: string) {
    // TODO : ha nem létező város, akkor hibaüzenetet küldeni
    //és mentése
    this.changeTab(cityName);
    //this.weathers.push(new Weather_data(cityName, `data about this city: ${cityName}`, ));
    this.getWeatherOf(cityName);
  }

  getCurrentWeatherOf(city: string) {
    this.apiService.getCurrentWeather(city).subscribe(
      res => {
        const weather: Weather_data = this.apiService.getWeatherData(res);
        this.weathers.push(weather);
      },
      err => {
        alert("Unable to load current weather data of city: " + city  + ". Error message is: " + err.error.message);
        this.changeTab(this.weathers[0].city);
      }
    );
  }

  private getForecastOf(city: string) {
    this.apiService.getForecast(city).subscribe(
      res => {
        const forecast: number[] = this.apiService.setForecastData(res)
        let w: Weather_data = this.weathers[this.weathers.length - 1];
        w.set5DayForecast(forecast);
      },
      err => {
        alert("Unable to load five day forecast of city: " + city  + ". Error message is: " + err.error.message);
        this.changeTab(this.weathers[0].city);
      }
    );
  }

  private getWeatherOf(city: string) {
    this.getCurrentWeatherOf(city);
    this.getForecastOf(city);
  }

  // private getWeatherOf(city: string) {
  //   const weather: Weather_data = this.apiService.getWeatherOf(res);
  //   this.weathers.push(weather);
  // }
}
