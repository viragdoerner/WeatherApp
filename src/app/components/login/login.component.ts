import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginInfo} from '../../model/loginInfo';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  successfulLogin = true;
  private loginInfo: LoginInfo;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  onSubmit() {
    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password
    );
    this.successfulLogin = this.authService.login(this.loginInfo);
    if (this.successfulLogin){
      console.log('Sikeresen bejelentkeztel ' + this.form.username );
      this.router.navigateByUrl('/home');
    }
  }
}
