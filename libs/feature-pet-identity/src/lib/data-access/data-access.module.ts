import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as walletStore from './store/wallet/wallet.reducer';
import * as issuerStore from './store/issuers/issuers.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      walletStore.walletKey,
      walletStore.reducer
    ),
    StoreModule.forFeature(
      issuerStore.issuersFeatureKey,
      issuerStore.reducers
    )
  ]
})
export class DataAccessModule { }
