import { Action } from '@ngrx/store';
import { FormValidity } from './rx-forms.state';

export const SET_DATA = '[Rx Forms] Set Data';
export const UPDATE_VALUE = '[Rx Forms] Update Value';
export const SET_VALIDITY = '[Rx Forms] Set Validity';
export const INITIALIZE_FORM = '[Rx Forms] Initialize form';


export class InitializeFormAction implements Action {
  readonly type = INITIALIZE_FORM;

  constructor(public payload: string) {}
}

export class SetDataAction implements Action {
  readonly type = SET_DATA;

  constructor(public payload: any) {}
}

export class UpdateValueAction implements Action {
  readonly type = UPDATE_VALUE;

  constructor(public payload: string, public path: Array<string>) {}
}

export class SetValidityAction implements Action {
  readonly type = SET_VALIDITY;

  constructor(public payload: FormValidity) {}
}

export type RxFormsActions =
  SetDataAction |
  SetValidityAction |
  UpdateValueAction |
  InitializeFormAction;
