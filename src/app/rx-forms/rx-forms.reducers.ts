import { ActionReducer } from '@ngrx/store';

import * as rxForm from './rx-forms.actions';
import { FormState, FormValidity } from './rx-forms.state';
import { rxFormData } from './rx-forms/api';

export const initialState: FormState = {
    data: null,
    validity: 'Valid'
};

export const formReducers = {
    data: data,
    validity: validity
};

export function data(state = initialState.data, action: rxForm.RxFormsActions): any {
    switch (action.type) {
        case rxForm.SET_DATA:
            return action.payload;
        case rxForm.UPDATE_VALUE:
            return rxFormData.set(state, action.path, action.payload);

        default:
            return state;
    }
}

export function validity(state = initialState.validity, action: rxForm.RxFormsActions): FormValidity {
    switch (action.type) {
        case rxForm.SET_VALIDITY:
            return action.payload;

        default:
            return state;
    }
}

export function forms(state = [], action: rxForm.RxFormsActions): FormState[] {
    switch (action.type) {
        case rxForm.INITIALIZE_FORM:
            return [{
                data: data(null, action),
                validity: validity(null, action)
                },
                ...state
            ];
        case rxForm.UPDATE_VALUE:
            // 1. Find the slice with the correct uuid
            // 2. call data reducer for this slice
            // WIP
            return state;
        case rxForm.SET_DATA:
            // 1. Find the slice with the correct uuid
            // 2. call data reducer for this slice
            // WIP
            return state;

        default:
            return state;
    }
}



