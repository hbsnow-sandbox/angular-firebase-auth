import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  get city() {
    return this.weatherService.city;
  }

  get weather() {
    return this.weatherService.weather;
  }

  get weatherClassName() {
    return this.weatherService.weather ? this.weatherService.weather.weather[0].main : '';
  }
}
