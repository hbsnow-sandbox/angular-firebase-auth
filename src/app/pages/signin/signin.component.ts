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

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private router: Router, public authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
  }

  async signInGoogle() {
    try {
      await this.authenticationService.SignInGoogle();
      this.router.navigate(['/']);
    } catch (err) {
      console.error(`ログインに失敗しました: ${err}`);
    }
  }
}
