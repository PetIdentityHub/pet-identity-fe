import { Inject, Injectable } from '@angular/core';

import { BrowserProvider, Network, ethers } from 'ethers';
import { Store } from '@ngrx/store';
import { WalletType } from '../models/wallet.model';

import * as WalletActions from '../store/wallet/wallet.actions';
import { APP_CONFIG, isMobile, AppConfig } from '@pet-identity/shared';

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

const ACCOUNTS_CHANGED = 'accountsChanged';
const CHAIN_CHANGED = 'chainChanged';
const DISCONNECT = 'disconnect';

@Injectable({ providedIn: 'root' })
export class WalletService {
  private provider: BrowserProvider | null = null;

  constructor(
    private store: Store,
    @Inject(APP_CONFIG) private readonly appConfig: AppConfig
  ) {}

  private loggingInDevelopMode(where: string, message: any): void {
    !this.appConfig.production && console.log(where, message);
  }

  //Metamask handlers
  handleAccountsChangedMetamask = (accounts: string[]): void => {
    if (!Array.isArray(accounts)) {
      this.store.dispatch(
        WalletActions.accountsChanged({
          account: accounts[0],
        })
      );

      this.store.dispatch(
        WalletActions.connectWalletSuccess({
          walletType: WalletType.METAMASK,
        })
      );
    }

    if (accounts.length === 0) {
      this.disconnectWallet();
    } else {
      this.loggingInDevelopMode('handleAccountChanged', accounts);
      this.store.dispatch(
        WalletActions.accountsChanged({
          account: accounts[0],
        })
      );

      this.store.dispatch(
        WalletActions.connectWalletSuccess({
          walletType: WalletType.METAMASK,
        })
      );
    }
  };

  handleChainChangedMetamask = (chainIdHex: string): void => {
    if (typeof chainIdHex === 'undefined') return;
    if (chainIdHex !== this.appConfig.chainIdHex) {
      this.disconnectWallet();
    } else {
      this.store.dispatch(WalletActions.chainChanged({ chainId: chainIdHex }));
    }
  };

  handleDisconnectMetamask = (reason: ProviderRpcError): void => {
    if (reason.code !== 1013) {
      //MetaMask: Disconnected from chain. Attempting to connect.
      this.disconnectWallet();
    }
  };

  private createProviderHooks(): void {
    window.ethereum.on(ACCOUNTS_CHANGED, this.handleAccountsChangedMetamask);
    window.ethereum.on(CHAIN_CHANGED, this.handleChainChangedMetamask);
    window.ethereum.on(DISCONNECT, this.handleDisconnectMetamask);
  }

  private removeMetamaskProviderHooks(): void {
    (this.provider as BrowserProvider).removeListener(
      ACCOUNTS_CHANGED,
      this.handleAccountsChangedMetamask
    );
    (this.provider as BrowserProvider).removeListener(
      CHAIN_CHANGED,
      this.handleChainChangedMetamask
    );
    (this.provider as BrowserProvider).removeListener(
      DISCONNECT,
      this.handleDisconnectMetamask
    );
  }

  public async connectWallet(walletType: WalletType): Promise<void> {
    switch (walletType) {
      case WalletType.METAMASK: {
        if (typeof window.ethereum === 'undefined' && isMobile()) {
          window.location.href = this.appConfig.metamaskDeepLink;
        } else if (typeof window.ethereum !== 'undefined') {
          this.provider = new ethers.BrowserProvider(window.ethereum);
          this.createProviderHooks();
          this.store.dispatch(WalletActions.connectWallet());
          await this.provider
            .send('eth_requestAccounts', [])
            .then((accounts: string[]) => {
              this.store.dispatch(
                WalletActions.accountsChanged({
                  account: accounts[0],
                })
              );
            })
            .catch((error: any) => {
              this.loggingInDevelopMode('eth_requestAccounts', error);
              this.store.dispatch(WalletActions.connectWalletError());
            });

          try {
            await this.provider
              .send('wallet_switchEthereumChain', [
                { chainId: this.appConfig.chainIdHex },
              ])
              .then(() => {
                this.loggingInDevelopMode('wallet_switchEthereumChain', 'ok');
                this.store.dispatch(
                  WalletActions.connectWalletSuccess({
                    walletType: WalletType.METAMASK,
                  })
                );
              });
          } catch (error: any) {
            if (error.code === 4902) {
              try {
                await this.provider
                  .send('wallet_addEthereumChain', [
                    {
                      chainId: this.appConfig.chainIdHex,
                      rpcUrl: this.appConfig.rpcUrlBinance,
                    },
                  ])
                  .then(() => {
                    this.loggingInDevelopMode('wallet_addEthereumChain', 'ok');
                    this.store.dispatch(
                      WalletActions.connectWalletSuccess({
                        walletType: WalletType.METAMASK,
                      })
                    );
                  });
              } catch (addError) {
                console.error('not this chain');
                return;
              }
            } else if (error.code === 4001) {
              //User reject network change
              this.loggingInDevelopMode('error.code 4001', error);
              return;
            }
          }
        } else {
          //notif here
        }
        break;
      }
    }
  }

  public disconnectWallet(): void {
    if (this.provider) {
      this.provider?.removeAllListeners();
      this.removeMetamaskProviderHooks();
      this.provider = null;
      this.store.dispatch(WalletActions.disconnectWallet());
    }
  }
}
