import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  fetch(id) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${environment.openWeatherMapApi}`);
  }
}
