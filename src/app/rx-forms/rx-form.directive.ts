import { Observable } from 'rxjs/Observable';

import { Directive, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { FormState } from './rx-form.state';

@Directive({
    selector: 'form[rxForm]'
})

export class RxFormDirective implements OnInit {

    model: any;

    constructor(private store: Store<FormState>) {}

    ngOnInit() {
        this.model = this.store.select(state => state.model);
    }
}
