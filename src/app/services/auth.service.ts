import { Injectable } from '@angular/core';
import {LoginInfo} from '../model/loginInfo';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  // ha sikeres a bejelentkezés igazzal tér vissza (létező user-pw páros VAGY teljesen új felhasználónév esetén)
  login(loginInfo: LoginInfo) {
    const storageData = sessionStorage.getItem(loginInfo.username);
    // ha nincs ilyen felhasználó, regisztrálok egy újat
    if (storageData === null) {
      console.log('registered a new user');
      this.register(loginInfo);
      return true;
    } else {
      const pw = sessionStorage.getItem('auth_' + loginInfo.username);
      // ha helyes a jelszó igazzal tér vissza
      if (pw === loginInfo.password) {
        console.log('signed in with existing account');
        loginInfo.username = loginInfo.username;
        sessionStorage.setItem('currentUser', loginInfo.username);
        return true;
      } else {
        return false;
      }
    }
  }

  /* regisztrálás:
     eltárolom az aktuális felhasználót
     eltárolom az új felhasználó-jelszó párost
     létrehozok egy új felhasználót
  */
  register(loginInfo: LoginInfo) {
    sessionStorage.setItem('currentUser', loginInfo.username);
    sessionStorage.setItem('auth_' + loginInfo.username, loginInfo.password);
    this.storageService.newUser(loginInfo.username);
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return sessionStorage.getItem('currentUser');
  }
}
