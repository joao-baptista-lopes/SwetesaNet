import { Component } from '@angular/core';
import { Router, ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth-guard',
  standalone: true,
  imports: [],
  templateUrl: './auth-guard.component.html',
  styleUrl: './auth-guard.component.scss'
})
export class AuthGuardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  resolve(): Observable<boolean> {
    const isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return of(isAuthenticated);
  }
}
