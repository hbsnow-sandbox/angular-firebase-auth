import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  signup = false;

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  async signUp() {
    try {
      await this.authenticationService.signUp(this.email, this.password);
      this.signup = true;
    } catch (err) {
      console.log(err);
    }
  }
}
