export class Weather_data {
  constructor(c: string = null, d: string = null, t: number = null, h: number = null, a: number = null, wd: number = null, ws: number = null) {
    this.city = c;
    this.description = d;
    this.temperature = t;
    this.humidity = h;
    this.air = a;
    this.windDir = wd;
    this.windSpeed = ws;
  }

  city: string;
  description: string;
  temperature: number;
  humidity: number;
  air: number;
  windDir: number;
  windSpeed: number;
}
