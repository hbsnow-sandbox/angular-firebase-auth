import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prefs = [
    {value: '2128295', viewValue: '札幌'},
    {value: '1850147', viewValue: '東京'},
    {value: '1853908', viewValue: '大阪'},
    {value: '1863958', viewValue: '福岡'}
  ];

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  signOut() {
    this.authenticationService.SignOut();
  }
}
