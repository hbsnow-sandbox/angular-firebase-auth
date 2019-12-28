import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

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

}
