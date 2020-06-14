import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  username: string;

  constructor( private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
  }

  Logout() {
    this.authService.logout();
    this.username = null;
    this.router.navigateByUrl('/login');
  }
}
