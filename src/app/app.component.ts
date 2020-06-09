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
    /*for (let i = 0; i < 5; i++) {
      const w: Weather_data = new Weather_data(
        `${i}City`,
        `${i} weather data about this city`);
      this.weathers.push(w);
    }*/
    this.getCurrentWeatherOf('Budapest');
  }
  changeTab(tab: string) {
      this.currentTab = tab;
  }

  onDeleteTab(city: string) {
    this.weathers = this.weathers.filter(rowObj => rowObj.city !== city);
  }

  onAddTab(cityName: string) {
    // TODO : API hívás, város adatainak lekérése
    // TODO : ha nem létező város, akkor hibaüzenetet küldeni
    // TODO : ha létezik új város objektum létrehozása
    //és mentése
    this.changeTab(cityName);
    //this.weathers.push(new Weather_data(cityName, `data about this city: ${cityName}`, ));
  }

  getCurrentWeatherOf(city: string) {
    this.apiService.getCurrentWeather(city).subscribe(
      res => {
        console.log(res);
        const weather: Weather_data = this.apiService.getWeatherData(res);
        console.log(weather);
        this.weathers.push(weather);
      },
      err => {
        alert(err.error.message);
      }
    );
  }
}
