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

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
  }
}
