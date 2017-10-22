import { ActionReducer } from '@ngrx/store';

import * as rxForm from './rx-form.actions';
import { FormState, FormValidity } from './rx-form.state';
import { rxFormData } from './rx-core/api';

export const initialState: FormState = {
    model: {},
    validity: 'Valid'
};

export const formReducers = {
    model: model,
    validity: validity
};

export function model(state = initialState.model, action: rxForm.RxFormActions): any {
    switch (action.type) {
        case rxForm.SET_DATA:
            return action.payload;
        case rxForm.UPDATE_VALUE:
            return rxFormData.set(state, action.path, action.payload);

        default:
            return state;
    }
}

export function validity(state = initialState.validity, action: rxForm.RxFormActions): FormValidity {
    switch (action.type) {
        case rxForm.SET_VALIDITY:
            return action.payload;

        default:
            return state;
    }
}

export function form(state = initialState, action: rxForm.RxFormActions): FormState {
    switch (action.type) {
        case rxForm.INITIALIZE_FORM:
            return {
                    model: model(null, action),
                    validity: validity(null, action)
                };
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



