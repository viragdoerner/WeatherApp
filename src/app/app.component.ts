import {Component, OnInit} from '@angular/core';
import {Weather_data} from './model/weather_data';
import {ApiService} from './services/api.service';
import {ErrorAlert} from './model/errorAlert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  constructor() { }

  ngOnInit(): void {
  }

}
