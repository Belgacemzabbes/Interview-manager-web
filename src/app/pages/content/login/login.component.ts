import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/shared/models/user-models';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userLogin: UserLoginModel;
  public isNotValid: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    this.userLogin = new UserLoginModel();
  }
  ngOnInit(): void {}
  public onLogin(regularForm: NgForm) {
    if (regularForm.valid) {
      this.isNotValid = false;
      this.authService.Login(this.userLogin).subscribe((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user.iD_USER.toString());
        this.router.navigate(['/home']);
      });
    } else{
      this.isNotValid = true;
    }
  }
}
