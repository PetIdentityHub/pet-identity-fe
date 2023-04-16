import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, TopNavComponent } from '@pet-identity/shared';
import { TuiRootModule } from '@taiga-ui/core';
import { DataAccessModule, WalletFacade, WalletType } from '@pet-identity/feature-pet-identity';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    TuiRootModule,
    RouterModule,
    TopNavComponent,
    FooterComponent,
    DataAccessModule
  ],
  selector: 'pet-identity-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  walletConnected$: Observable<boolean> = of(false)

  constructor(private readonly walletFacade: WalletFacade) {
    this.walletConnected$ = this.walletFacade.connected$;
  }

  connect() {
    this.walletFacade.connectWalletAccount(WalletType.METAMASK);
  }
}
