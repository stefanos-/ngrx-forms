import { Directive, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import * as rxForm from '../rx-forms/rx-form.actions';


@Directive({
    selector: 'input:not([type=checkbox])[rxFormField],textarea[rxFormField]',
    host: {
        '(input)': 'onChange($event.target.value)'
    }
})

export class RxFormFieldDirective {

    @Input('rxFormField') field: Array<string>;

    onChange(value: string) {
    }

}
