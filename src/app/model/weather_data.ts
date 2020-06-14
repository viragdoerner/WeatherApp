export class Weather_data {
  constructor(c: string, d: string, t: number, h: number, a: number, wd: number, ws: number) {
    this.city = c;
    this.description = d;
    this.temperature = t;
    this.humidity = h;
    this.air = a;
    this.windDir = wd;
    this.windSpeed = ws;
    this.forecast = null;
  }
  public set5DayForecast(f: number[]) {
    this.forecast = f;
  }
  city: string;
  description: string;
  temperature: number;
  humidity: number;
  air: number;
  windDir: number;
  windSpeed: number;
  forecast: number[];
}
