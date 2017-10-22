import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';

import * as form from './rx-forms/rx-form.reducers';

// export interface State {}

export const reducers: ActionReducerMap<{}> = {};

export function logger(reducer: ActionReducer<{}>): ActionReducer<any, any> {
  return function (state: {}, action: any): {} {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger]
  : [];
