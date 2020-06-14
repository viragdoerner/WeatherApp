import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weather_data} from '../../model/weather_data';
import {Weather_forecast} from '../../model/weather_forecast';
import {Weather} from '../../model/weather';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  constructor() { }
  @Input() weather: Weather_data;
  @Output() onRemove = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.weather);
  }

  delete() {
    this.onRemove.emit(this.weather.city);
  }


}
