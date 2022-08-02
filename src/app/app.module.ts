import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationApiUrls } from './shared/apiUrls/authentication-api-urls';
import { SessionApiUrls } from './shared/apiUrls/session-api-urls';
import { EtablissementApiUrls } from './shared/apiUrls/etablissement-api-urls';
import { ToastrModule } from 'ngx-toastr';
import { FormationApiUrls } from './shared/apiUrls/formation-api-urls';
import { CandidatApiUrls } from './shared/apiUrls/candidat-api-urls';
import { InterviewApiUrls } from './shared/apiUrls/interview-api-urls';
import {
  NgxUiLoaderBlurredDirective,
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';
import { DemoService } from './shared/services/demo.service';
import { DatePipe } from '@angular/common';
import {
  CurrencyMaskConfig,
  CurrencyMaskModule,
  CURRENCY_MASK_CONFIG,
} from 'ng2-currency-mask';
import { StateApiUrls } from './shared/apiUrls/state-api-urls';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
};
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  // bgsOpacity: 0.5,
  bgsPosition: POSITION.centerCenter,
  // bgsSize: 60,
  // bgsType: SPINNER.chasingDots,
  // blur: 5,
  // delay: 0,
  fastFadeOut: true,
  fgsColor: 'red',
  fgsPosition: POSITION.centerCenter,
  // fgsSize: 60,
  //fgsType: SPINNER.chasingDots,
  // gap: 24,
  logoPosition: POSITION.centerCenter,
  // logoSize: 120,
  // logoUrl: 'assets/angular.png',
  // overlayBorderRadius: '0',
  // overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  // pbColor: '#92aac1',
  // pbDirection: PB_DIRECTION.leftToRight,
  // pbThickness: 5,
  // hasProgressBar: false,
  // text: 'Welcome to ngx-ui-loader',
  // textColor: '#FFFFFF',
  // textPosition: POSITION.centerCenter,
  // maxTime: -1,
  // minTime: 500
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    FullLayoutComponent,
    ContentLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgSelectModule,
    RouterModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule, // import this module for showing loader automatically when navigating between app routes
    NgxUiLoaderHttpModule,
    CurrencyMaskModule,
  ],
  providers: [
    ThemeService,
    DemoService,
    AuthenticationApiUrls,
    SessionApiUrls,
    EtablissementApiUrls,
    FormationApiUrls,
    CandidatApiUrls,
    InterviewApiUrls,
    StateApiUrls,
    DatePipe,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
