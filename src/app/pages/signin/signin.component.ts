import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  emailFormControl = new FormControl('', [
    Validators.email,
  ]);

  constructor(private router: Router, public authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  async signIn() {
    try {
      await this.authenticationService.signIn(this.email, this.password);
      this.router.navigate(['/']);
    } catch (err) {
      console.error(`ログインに失敗しました: ${err}`);
    }
  }

  async signInGoogle() {
    try {
      await this.authenticationService.signInGoogle();
      this.router.navigate(['/']);
    } catch (err) {
      console.error(`ログインに失敗しました: ${err}`);
    }
  }
}
