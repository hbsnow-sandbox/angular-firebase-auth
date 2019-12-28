import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Weather, City } from 'src/types/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _cities: City[] = [
    { value: '2128295', viewValue: '札幌', image: 'https://find47.jp/ja/i/RhnEE/image_file' },
    { value: '1850147', viewValue: '東京', image: 'https://find47.jp/ja/i/cVikh/image_file' },
    { value: '1853908', viewValue: '大阪', image: 'https://find47.jp/ja/i/plmNy/image_file' },
    { value: '1863958', viewValue: '福岡', image: 'https://find47.jp/ja/i/xewpq/image_file' }
  ];

  private _weather: Weather;
  private _city: City;

  constructor(private http: HttpClient) { }

  set weather(weather: Weather) {
    this._weather = weather;
  }

  get weather() {
    return this._weather;
  }

  get cities() {
    return this._cities;
  }

  set city(city: City) {
    this._city = city;
  }

  get city() {
    return this._city;
  }

  setCityByValue(cityValue: string) {
    this._city = this._cities.find(city => city.value === cityValue);
  }

  fetch() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${this._city.value}&appid=${environment.openWeatherMapApi}`);
  }
}
