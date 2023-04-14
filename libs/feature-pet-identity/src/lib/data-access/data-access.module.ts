import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as walletStore from './store/wallet/wallet.reducer';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      walletStore.walletKey,
      walletStore.reducer
    ),
  ]
})
export class DataAccessModule { }
