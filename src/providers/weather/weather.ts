import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather = city => {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=48ad592aef603ee1fe03ed262b1815a3`
    );
  };

  getForecast = city => {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=48ad592aef603ee1fe03ed262b1815a3`
    );
  };
}
