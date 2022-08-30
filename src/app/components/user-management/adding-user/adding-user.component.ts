import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'autoprefixer';
import { UserModel, UserRoleModel } from 'src/app/shared/models/user-models';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-adding-user',
  templateUrl: './adding-user.component.html',
  styleUrls: ['./adding-user.component.css'],
})
export class AddingUserComponent implements OnInit {
  public userDetails: UserModel = new UserModel();
  public userRoleList: UserRoleModel[] = [];
  public isNotValid: boolean = false;
  constructor(
    private registerService: UserService,
    private toastrService: NgxToastrService
  ) {}

  ngOnInit(): void {
    this.getAllRoles();
  }
  public async addUser(form: NgForm) {
    if (form.valid) {
      (await this.registerService.addUser(this.userDetails)).subscribe(
        (data) => {
          this.toastrService.displaySuccessMessage('Ajouté avec succés');
          this.userDetails = new UserModel();
          this.isNotValid = false;
        }
      );
    } else {
      this.isNotValid = true;
    }
  }
  public async getAllRoles() {
    (await this.registerService.GetAllUserRoles()).subscribe((data) => {
      this.userRoleList = data;
    });
  }
}
