import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const IssuersActions = createActionGroup({
    source: 'Issuers',
    events: {
        'GetApplicationByLoginUser': emptyProps(),
        'GetApplicationByLoginUserSuccess': props<{ issuerApplication: unknown }>()
    }
});