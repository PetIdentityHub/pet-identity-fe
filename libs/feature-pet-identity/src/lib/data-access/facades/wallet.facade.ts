import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { WalletType } from '@pet-identity/feature-pet-identity';
import { hideWallets } from '@pet-identity/feature-pet-identity';

import * as WalletSelectors from '../store/wallet/wallet.selectors';
import { WalletService } from '../services/wallet.service';


@Injectable({ providedIn: 'root' })
export class WalletFacade {

  readonly showWallets$ = this.store.select(WalletSelectors.getShowWallets);
  readonly closeWallets$ = this.store.select(WalletSelectors.getCloseWallets);
  readonly account$ = this.store.select(WalletSelectors.getAccount);
  readonly chainId$ = this.store.select(WalletSelectors.getChainId);
  readonly connected$ = this.store.select(WalletSelectors.getWalletConnected);


  constructor(
    private readonly store: Store,
    private readonly walletService: WalletService,
  ) {}



  public connectWalletAccount(walletType: WalletType): void {
    this.walletService.connectWallet(walletType);
  }

  public disconnectWalletAccount(): void {
    this.walletService.disconnectWallet();
  }


  public hideWallets(): void {
    this.store.dispatch(hideWallets());
  }

}
