import { Directive, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as ngrxForms from '../ngrx-forms/ngrx-forms.actions';


@Directive({
    selector: '[ngrxForm]',
})

export class NgrxFormsDirective implements OnInit {

    formGuid: string;

    constructor(
        private store: Store<any>
    ) {}

    ngOnInit() {
        this.formGuid = this.guid();
        // I need to find a way to pass this guid to ngrxFormFieldDirective!
        this.store.dispatch(new ngrxForms.InitializeFormAction(this.formGuid));
    }

    private guid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
        return v.toString(16);
        });
    }

}
