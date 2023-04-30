import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as loadingStore from './loading/loading.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      loadingStore.loadingKey,
      loadingStore.reducer
    ),
  ]
})
export class SharedStoreModule { }
