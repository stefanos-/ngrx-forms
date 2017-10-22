import { Directive, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import * as rxForms from '../rx-forms/rx-forms.actions';


@Directive({
    selector: 'input:not([type=checkbox])[RxFormField],textarea[RxFormField]',
    host: {
        '(input)': 'onChange($event.target.value)'
    }
})

export class RxFormsFieldDirective {

    @Input('RxFormField') path: Array<string>;

    constructor(
        private store: Store<any>
    ) {}

    onChange(value: string) {
        this.store.dispatch(new rxForms.UpdateValueAction(value, this.path));
    }

}
