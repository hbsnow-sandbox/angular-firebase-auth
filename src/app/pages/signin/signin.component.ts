import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  async signIn() {
    try {
      await this.authenticationService.signIn(this.email, this.password);
      this.router.navigate(['/']);
    } catch (err) {
      console.error(`サインインに失敗しました: ${err}`);
    }
  }

  async signInGoogle() {
    try {
      await this.authenticationService.signInGoogle();
      this.router.navigate(['/']);
    } catch (err) {
      console.error(`サインインに失敗しました: ${err}`);
    }
  }
}
