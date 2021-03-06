import { AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Weather_data} from '../../model/weather_data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input('data') data: number[];
  days: string[] = [];
  multi =  [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1",
          "value": 18
        },
        {
          "name": "2",
          "value": 20
        },
        {
          "name": "3",
          "value": 12
        },
        {
          "name": "4",
          "value": 10
        },
        {
          "name": "5",
          "value": 19
        }
      ]
    }
  ]

  view: any[] = [700, 300];

  // options
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Temperature C°';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { }
  ngOnInit(): void {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < 5 ; i++) {
      const today = new Date();
      const next = new Date(today);
      next.setDate(next.getDate() + i);
      this.days.push(days[next.getDay()]);
    }

  }

}
