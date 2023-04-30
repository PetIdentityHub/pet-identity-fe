import { createAction, props } from "@ngrx/store";

export const loadingChange = createAction(
    '[Loading] Loadind state changed',
    props<{ loading: boolean }>()
  );
  