import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromWallets from './wallet.reducer';

export const selectWallet = createFeatureSelector<fromWallets.WalletState>(
  fromWallets.walletKey
);

export const getShowWallets = createSelector(
  selectWallet,
  (state) => state.showWallets
);

export const getCloseWallets = createSelector(
  selectWallet,
  (state) => state.closeWallets
);

export const getAccount = createSelector(
  selectWallet,
  (state) => state.account
);

export const getChainId = createSelector(
  selectWallet,
  (state) => state.chainId
);

export const getWalletConnected = createSelector(
  selectWallet,
  (state) => state.connected
);

export const getWalletType = createSelector(
  selectWallet,
  (state) => state.walletType
);
