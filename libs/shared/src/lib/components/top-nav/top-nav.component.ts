import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@pet-identity/ui-kit';
import { Router, RouterLink } from '@angular/router';
import { WalletFacade } from '@pet-identity/feature-pet-identity';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'shared-top-nav',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  @Input() connected: boolean | null = false;
  @Output() onLogin = new EventEmitter<boolean>();

  constructor(
    private readonly walletFacade: WalletFacade,
    private readonly router: Router
    ) {}

  login() {
    this.onLogin.emit(true);
  }

  logout() {
    this.walletFacade.disconnectWalletAccount();
    this.router.navigate(['/']);
  }
}
