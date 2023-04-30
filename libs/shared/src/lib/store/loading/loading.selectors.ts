import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromLoading from './loading.reducer';


export const selectLoading = createFeatureSelector<fromLoading.LoadingState>(
    fromLoading.loadingKey
  );

  
export const getLoading = createSelector(
    selectLoading,
    (state: fromLoading.LoadingState) => state.loading
);