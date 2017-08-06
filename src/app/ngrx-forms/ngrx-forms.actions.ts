import { Action } from '@ngrx/store';
import { FormValidity } from './ngrx-forms.state';

export const SET_DATA = '[Ngrx Forms] Set Data';
export const UPDATE_VALUE = '[Ngrx Forms] Update Value';
export const SET_VALIDITY = '[Ngrx Forms] Set Validity';
export const INITIALIZE_FORM = '[Ngrx Forms] Initialize form';


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

export type NgrxFormsActions =
  SetDataAction |
  SetValidityAction |
  UpdateValueAction |
  InitializeFormAction;
