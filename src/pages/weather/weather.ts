import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather';

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  weatherData: object;
  weatherForecast: object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private weatherProvider: WeatherProvider,
    public loadingController: LoadingController
  ) {}

  ionViewDidLoad() {}

  getWeatherData = input => {
    console.log(input);
    if (input.value) {
      this.weatherProvider.getWeather(input.value).subscribe(
        data => {
          console.log(data);
          this.weatherData = data;
        },
        error => {
          console.warn(error);
        }
      );
      this.weatherProvider.getForecast(input.value).subscribe(
        data => {
          console.log(data);
          this.weatherForecast = data;
        },
        error => {
          console.warn(error);
        }
      );
    }
  };
}
