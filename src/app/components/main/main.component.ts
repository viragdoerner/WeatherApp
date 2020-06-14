import { Component, OnInit } from '@angular/core';
import {Weather_data} from '../../model/weather_data';
import {ErrorAlert} from '../../model/errorAlert';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  weathers: Weather_data[] = [];
  currentTab: string;
  username: string;
  error: ErrorAlert = new ErrorAlert();


  constructor( private apiService: ApiService, private authService: AuthService, private storageService: StorageService) { }
  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
    const cities = this.storageService.getCitiesOf(this.username);
    cities.forEach( (element) => {
      this.getWeatherOf(element);
    });
    if (cities.length !== 0) {
      this.changeTab(cities[0]);
    }

  }
  changeTab(tab: string) {
    this.currentTab = tab;
  }

  onDeleteTab(city: string) {
    this.weathers = this.weathers.filter(rowObj => rowObj.city !== city);
    this.storageService.deleteCity(this.username, city);
    if (this.weathers.length !== 0) {
      this.changeTab(this.weathers[0].city);
    }
  }

  onAddTab(cityName: string) {
    this.changeTab(cityName);
    this.storageService.addCity(this.username, cityName);
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
        this.error.errormessage = err.error.message;
        this.error.city = city;
        this.error.active = true;
        setTimeout(this.hideError.bind(this), 3000);
        //alert("Unable to load current weather data of city: " + city  + ". Error message is: " + err.error.message);
        this.changeTab(this.weathers[0].city);
      }
    );
  }

  private hideError() {
      this.error.active = false;
  }

  private getForecastOf(city: string) {
    this.apiService.getForecast(city).subscribe(
      res => {
        const forecast: number[] = this.apiService.setForecastData(res)
        let w: Weather_data = this.weathers[this.weathers.length - 1];
        w.set5DayForecast(forecast);
      },
      err => {
        //alert("Unable to load five day forecast of city: " + city  + ". Error message is: " + err.error.message);
        this.changeTab(this.weathers[0].city);
      }
    );
  }

  private getWeatherOf(city: string) {
    console.log('get weather');
    this.getCurrentWeatherOf(city);
    this.getForecastOf(city);
  }
}

