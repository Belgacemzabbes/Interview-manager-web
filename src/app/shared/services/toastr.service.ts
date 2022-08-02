import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NgxToastrService {

  constructor(private toastrSerive: ToastrService) { }

  public displaySuccessMessage(message: string){
    this.toastrSerive.success(message, "Succés")
  }
}
