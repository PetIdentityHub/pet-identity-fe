import { Action, createReducer, on } from '@ngrx/store';

import * as WalletActions from './wallet.actions';
import { WalletType } from '../../models/wallet.model';

export const walletKey = 'wallets';

export interface WalletState {
  account: string;
  chainId: string | undefined;
  connected: boolean;
  walletType: WalletType;
  showWallets: boolean;
  closeWallets: boolean | undefined;
}

export const initialState: WalletState = {
  account: '',
  chainId: undefined,
  connected: false,
  walletType: WalletType.NONE,
  showWallets: false,
  closeWallets: true,
};

export const walletReducer = createReducer(
  initialState,
  on(WalletActions.connectWallet, (state) => ({ ...state, spinner: true })),
  on(WalletActions.connectWalletSuccess, (state, { walletType }) => ({
    ...state,
    connected: true,
    walletType,
  })),
  on(WalletActions.connectWalletError, (state) => ({
    ...state,
    connected: false,
  })),
  on(WalletActions.disconnectWallet, (state) => ({
    ...state,
    connected: false,
    account: '',
    chainId: undefined,
    walletType: WalletType.NONE,
  })),
  on(WalletActions.accountsChanged, (state, { account }) => ({
    ...state,
    account,
  })),
  on(WalletActions.chainChanged, (state, { chainId }) => ({
    ...state,
    chainId,
  })),
  on(WalletActions.setWalletAddress, (state, { walletAddress }) => ({
    ...state,
    walletAddress: walletAddress,
  })),

  on(WalletActions.showWallets, (state, { close }) => ({ ...state, showWallets: true, closeWallets: close === false ? close : true })),
  on(WalletActions.hideWallets, (state) => ({ ...state, showWallets: false, closeWallets: true })),
);

export function reducer(state: WalletState | undefined, action: Action) {
  return walletReducer(state, action);
}
