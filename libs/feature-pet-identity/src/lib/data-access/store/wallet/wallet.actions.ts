import { createAction, props } from '@ngrx/store';
import { WalletType } from '../../models/wallet.model';

export const accountsChanged = createAction(
  '[Wallet] Account changed',
  props<{ account: string }>()
);

export const accountsChangedSuccess = createAction(
  '[Wallet] Account changed success'
);

export const chainChanged = createAction(
  '[Wallet] Chain changed',
  props<{ chainId: string }>()
);

export const disconnectWallet = createAction('[Wallet] Disconnect wallet');

export const connectWallet = createAction('[Wallet] Connect wallet');

export const connectWalletSuccess = createAction(
  '[Wallet] Connect wallet success',
  props<{ walletType: WalletType }>()
);

export const connectWalletError = createAction(
  '[Wallet] Connect wallet action'
);

export const setWalletAddress = createAction(
  '[Wallet] Set wallet address',
  props<{ walletAddress: string }>()
);

export const showSpinner = createAction('[Wallet] Show spinner');

export const hideSpinner = createAction('[Wallet] Hide spinner');

export const showWallets = createAction(
  '[Wallet] Show available wallets',
  props<{ close: boolean | undefined }>()
  );

export const hideWallets = createAction('[Wallet] Hide available wallets');

