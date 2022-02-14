import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/dataService.ts/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-template';
  constructor(public router: Router, private dataService: DataService) {

  }

  async onLogout() {
    this.dataService.logOut()
  }

  async onLogin() {
    this.dataService.login()
  }
}
