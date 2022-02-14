import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.ts/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  async onLogin() {
    this.dataService.login()
  }
}


