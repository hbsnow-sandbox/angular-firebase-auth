import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-auth';

  prefs = [
    {value: '2128295', viewValue: '札幌'},
    {value: '1850147', viewValue: '東京'},
    {value: '1853908', viewValue: '大阪'},
    {value: '1863958', viewValue: '福岡'}
  ];

  constructor() {}
}
