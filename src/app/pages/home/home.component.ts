import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, public authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  async signOut() {
    try {
      await this.authenticationService.signOut();
      this.router.navigate(['/']);
    } catch (err) {
      console.error(`サインアウトに失敗しました: ${err}`);
    }
  }

  submit() {
  }
}
