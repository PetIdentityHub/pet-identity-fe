import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as LoadingSelectors from './loading.selectors';
import { loadingChange } from './loading.actions';


@Injectable({ providedIn: 'root' })
export class LoadingFacade {

  readonly loading$ = this.store.select(LoadingSelectors.getLoading);

  constructor(
    private readonly store: Store,
  ) {}

  //set loading
    public setLoading(loading: boolean): void {
        this.store.dispatch(loadingChange({loading}));
    }

}
