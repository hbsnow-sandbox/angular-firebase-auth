import { Component, OnInit } from '@angular/core';
import { Weather, City } from 'src/types/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  private _selectedCityValue: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  get cities() {
    return this.weatherService.cities;
  }

  set selectedCityValue(selectedCityValue) {
    this._selectedCityValue = selectedCityValue;
  }

  get selectedCityValue() {
    return this._selectedCityValue;
  }

  submit() {
    this.weatherService.setCityByValue(this._selectedCityValue);
    this.weatherService.fetch()
      .subscribe(
        (data: Weather) => {
          this.weatherService.weather = { ...data };
        },
        (err) => console.error(err),
        () => console.log('onCompleted')
      );
  }
}
