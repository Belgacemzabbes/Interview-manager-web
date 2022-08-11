import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private jwtHelper: JwtHelperService,
    private router: Router ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const jwt = this.authService.GetToken();
    if (this.authService.isLoggedIn !== true) {
      Swal.fire({
        icon: 'warning',
        title: 'Votre session est expiré!',
        showConfirmButton: false,
        timer: 2500
      })
      this.router.navigate(['/content/login'])
    }
    return true;
  }
}
