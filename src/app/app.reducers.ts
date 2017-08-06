import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';
import { environment } from '../environments/environment';

import * as forms from './ngrx-forms/ngrx-forms.reducers';

// export interface State {}

export const reducers: ActionReducerMap<{}> = {};

export function logger(reducer: ActionReducer<{}>): ActionReducer<any, any> {
  return function (state: {}, action: any): {} {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: ActionReducer<any, any>[] = !environment.production
  ? [logger]
  : [];
