import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: UserLogin;

  constructor() { }

  ngOnInit() {
    this.login = new UserLogin();
  }

}
