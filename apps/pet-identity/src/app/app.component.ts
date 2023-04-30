import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, LoadingFacade, LoadingSpinnerComponent, SharedStoreModule, TopNavComponent } from '@pet-identity/shared';
import { TuiRootModule } from '@taiga-ui/core';
import { DataAccessModule, WalletFacade, WalletType } from '@pet-identity/feature-pet-identity';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TuiRootModule,
    RouterModule,
    TopNavComponent,
    FooterComponent,
    DataAccessModule,
    SharedStoreModule,
    LoadingSpinnerComponent
  ],
  selector: 'pet-identity-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  walletConnected$: Observable<boolean> = of(false)
  loading$: Observable<boolean> = of(false)

  constructor(private readonly walletFacade: WalletFacade, private loadingFacade: LoadingFacade) {
    this.walletConnected$ = this.walletFacade.connected$;
    this.loading$ = this.loadingFacade.loading$;  }

  connect() {
    this.walletFacade.connectWalletAccount(WalletType.METAMASK);
  }
}
