import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
} from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { DemoService } from './shared/services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo1';

  showSidebar: boolean;
  showNavbar: boolean;
  showFooter: boolean;
  isLoading: boolean;
  constructor(
    private router: Router,
    private config: NgSelectConfig,
    public demoService: DemoService
  ) {
    this.config.notFoundText = 'objet non-trouvé';
    this.config.appendTo = 'body';
    // set the bindValue to global config when you use the same
    // bindValue in most of the place.
    // You can also override bindValue for the specified template
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    this.config.bindValue = 'value';

    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages

    // router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (
    //       event['url'] == '/content/login' ||
    //       event['url'] == '/content/register' ||
    //       event['url'] == '/content/error404' ||
    //       event['url'] == '/content/error500'
    //     ) {
    //       this.showSidebar = false;
    //       this.showNavbar = false;
    //       this.showFooter = false;
    //       document.querySelector('.main-panel').classList.add('w-100');
    //       document
    //         .querySelector('.page-body-wrapper')
    //         .classList.add('full-page-wrapper');
    //       document
    //         .querySelector('.content-wrapper')
    //         .classList.remove('auth', 'auth-img-bg');
    //       document
    //         .querySelector('.content-wrapper')
    //         .classList.remove('auth', 'lock-full-bg');
    //       if (
    //         event['url'] == '/content/error404' ||
    //         event['url'] == '/content/error500'
    //       ) {
    //         document.querySelector('.content-wrapper').classList.add('p-0');
    //       }
    //     } else {
    //       this.showSidebar = true;
    //       this.showNavbar = true;
    //       this.showFooter = true;
    //       document.querySelector('.main-panel').classList.remove('w-100');
    //       document
    //         .querySelector('.page-body-wrapper')
    //         .classList.remove('full-page-wrapper');
    //       document
    //         .querySelector('.content-wrapper')
    //         .classList.remove('auth', 'auth-img-bg');
    //       document.querySelector('.content-wrapper').classList.remove('p-0');
    //     }
    //   }
    // });

    // Spinner for lazyload modules
    // router.events.forEach((event) => {
    //   if (event instanceof RouteConfigLoadStart) {
    //     this.isLoading = true;
    //   } else if (event instanceof RouteConfigLoadEnd) {
    //     this.isLoading = false;
    //   }
    // });
  }

  ngOnInit() {
    this.showSidebar = false;
    this.showNavbar = false;
    this.showFooter = false;
    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
