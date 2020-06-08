import {Component, OnInit} from '@angular/core';
import {Weather_data} from '../model/weather_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weathers: Weather_data[] = [];
  currentTab = 'Budapest';

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      const w: Weather_data = {
        city: `${i}City`,
        description: `${i}Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. ` +
          'It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.'
      };
      this.weathers.push(w);
    }
  }
  changeTab(tab: string) {
      this.currentTab = tab;
  }

  onDeleteTab(city: string) {
    console.log("delete tab 2");
    this.weathers = this.weathers.filter(rowObj => rowObj.city !== city);
  }

  addTab() {

  }
}
