import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weather_data} from '../../model/weather_data';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  constructor() { }
  @Input('weather') weather: Weather_data;
  @Output() onRemove = new EventEmitter<string>();

  ngOnInit(): void {
  }

  delete() {
    this.onRemove.emit(this.weather.city);
  }


}
