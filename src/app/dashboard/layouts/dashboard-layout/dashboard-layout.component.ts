import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authUser = inject(AuthService);


  public user = computed(() => this.authUser.currentUser());

  logout(): void {
    this.authUser.logout();
  }
}
