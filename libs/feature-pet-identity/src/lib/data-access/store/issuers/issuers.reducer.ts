import { Action, createReducer, on } from "@ngrx/store";
import { IssuersActions } from "./issuers.actions";

export const issuersFeatureKey = 'issuers';

export interface IssuersState {
    issuerApplication: unknown;
}

const initialState: IssuersState = {
    issuerApplication: undefined,
};

export const issuersReducer = createReducer(
    initialState,
    on(IssuersActions.getapplicationbyloginusersuccess, (state, { issuerApplication }) => ({ ...state, issuerApplication: issuerApplication }))
);

export function reducers(state: IssuersState | undefined, action: Action) {
    return issuersReducer(state, action);
}