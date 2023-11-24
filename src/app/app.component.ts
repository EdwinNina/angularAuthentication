import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private authService = inject(AuthService)
  private router = inject(Router)

  public hasFinishedAuthCheck = computed<boolean>(() => {
    return this.authService.authStatus() !== AuthStatus.checking
  })

  public authStatusChangedEffect = effect(() => {
    switch (this.authService.authStatus()) {
      case AuthStatus.checking:
      return
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard')
      return
      case AuthStatus.unAuthenticated:
        this.router.navigateByUrl('/auth/login')
      return
      default:
        this.router.navigateByUrl('/auth/login')
      break;
    }
  })
}
