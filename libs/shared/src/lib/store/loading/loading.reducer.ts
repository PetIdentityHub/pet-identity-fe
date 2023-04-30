import { Action, createReducer, on } from '@ngrx/store';
import * as LoadingActions from './loading.actions';

export const loadingKey = 'loading';

export interface LoadingState {
    loading: boolean;
}

export const initialState: LoadingState = {
    loading: false,
};

export const loadingReducer = createReducer(
    initialState,
    on(LoadingActions.loadingChange, (state, { loading }) => ({
        ...state,
        loading: loading,
    }))
);

export function reducer(state: LoadingState | undefined, action: Action) {
    return loadingReducer(state, action);
}
