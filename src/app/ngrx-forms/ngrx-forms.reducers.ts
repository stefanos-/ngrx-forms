import { ActionReducer } from '@ngrx/store';

import * as ngrxForm from './ngrx-forms.actions';
import { FormState, FormValidity } from './ngrx-forms.state';
import { ngrxFormData } from './ngrx-deep-change/api';

export const initialState: FormState = {
    uuid: null,
    data: null,
    validity: 'Valid'
};

export const formReducers = {
    uuid: uuid,
    data: data,
    validity: validity
};

export function uuid(state = initialState.uuid, action: ngrxForm.NgrxFormsActions): string {
    switch (action.type) {
        case ngrxForm.INITIALIZE_FORM:
            return action.payload;

        default:
            return state;
    }
}

export function data(state = initialState.data, action: ngrxForm.NgrxFormsActions): any {
    switch (action.type) {
        case ngrxForm.SET_DATA:
            return action.payload;
        case ngrxForm.UPDATE_VALUE:
            return ngrxFormData.set(state, action.path, action.payload);

        default:
            return state;
    }
}

export function validity(state = initialState.validity, action: ngrxForm.NgrxFormsActions): FormValidity {
    switch (action.type) {
        case ngrxForm.SET_VALIDITY:
            return action.payload;

        default:
            return state;
    }
}

export function forms(state = [], action: ngrxForm.NgrxFormsActions): FormState[] {
    switch (action.type) {
        case ngrxForm.INITIALIZE_FORM:
            return [{
                uuid: uuid(null , action),
                data: data(null, action),
                validity: validity(null, action)
                },
                ...state
            ];
        case ngrxForm.UPDATE_VALUE:
            // 1. Find the slice with the correct uuid
            // 2. call data reducer for this slice
            // WIP
            return state;
        case ngrxForm.SET_DATA:
            // 1. Find the slice with the correct uuid
            // 2. call data reducer for this slice
            // WIP
            return state;

        default:
            return state;
    }
}



