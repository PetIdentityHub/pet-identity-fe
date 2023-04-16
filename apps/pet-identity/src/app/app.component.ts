import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, TopNavComponent } from '@pet-identity/shared';
import { TuiRootModule } from '@taiga-ui/core';
import { DataAccessModule, WalletFacade, WalletType } from '@pet-identity/feature-pet-identity';


@Component({
  standalone: true,
  imports: [
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


  constructor(private readonly walletFacade: WalletFacade) {}

  connect() {
    this.walletFacade.connectWalletAccount(WalletType.METAMASK);
  }
}
