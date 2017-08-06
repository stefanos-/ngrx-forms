import { Directive, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import * as ngrxForms from '../ngrx-forms/ngrx-forms.actions';


@Directive({
    selector: 'input:not([type=checkbox])[ngrxFormField],textarea[ngrxFormField]',
    host: {
        '(input)': 'onChange($event.target.value)'
    }
})

export class NgrxFormsFieldDirective {

    @Input('ngrxFormField') path: Array<string>;

    constructor(
        private store: Store<any>
    ) {}

    onChange(value: string) {
        this.store.dispatch(new ngrxForms.UpdateValueAction(value, this.path));
    }

}
