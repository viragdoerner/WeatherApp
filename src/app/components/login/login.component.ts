import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoginFailed = false;
  errorMessage = '';
  //private loginInfo: AuthLoginInfo;

  constructor(
    //private authService: AuthService,
    //private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  onSubmit() {
    /*this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password
    );
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthority(data.authorities);

        this.isLoginFailed = false;
        console.log('Sikeresen bejelentkeztel ' + this.tokenStorage.getUsername() );
        this.router.navigateByUrl('/home');
      },
      (error) => {
        this.isLoginFailed = true;
        this.errorMessage = 'Invalid username or password';

      }
    );*/
  }
}
