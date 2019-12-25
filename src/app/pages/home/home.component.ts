import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WeatherService } from 'src/app/services/weather.service';
import { Router } from '@angular/router';
import { weather } from 'src/types/weather';

export interface Pref {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedPref: string;
  weather: weather;

  prefs: Pref[] = [
    { value: '2128295', viewValue: '札幌' },
    { value: '1850147', viewValue: '東京' },
    { value: '1853908', viewValue: '大阪' },
    { value: '1863958', viewValue: '福岡' }
  ];

  constructor(private router: Router, private weatherService: WeatherService, private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  async signOut() {
    try {
      await this.authenticationService.signOut();
      this.router.navigate(['/signin']);
    } catch (err) {
      console.error(`サインアウトに失敗しました: ${err}`);
    }
  }

  submit() {
    this.weatherService.fetch(this.selectedPref)
      .subscribe(
        (data: weather) => this.weather = { ...data },
        err => console.error(err),
        () => console.log('onCompleted')
      );
  }
}
