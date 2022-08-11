import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../models/user-models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig],
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  public currentUser: UserModel = new UserModel();

  constructor(
    config: NgbDropdownConfig,
    private router: Router,
    private authService: AuthService
  ) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    this.getUserById();
  }

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas')?.classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if (
      !body?.classList.contains('sidebar-toggle-display') &&
      !body?.classList.contains('sidebar-absolute')
    ) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body?.classList.add('sidebar-icon-only');
      } else {
        body?.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  logout() {
    this.authService.logout()
  }
  async getUserById() {
    (await this.authService.GetUserById()).subscribe((data) => {
      this.currentUser = data;
    });
  }
  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }
}
