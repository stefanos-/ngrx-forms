import { Observable } from 'rxjs/Observable';

import { Directive, Input, Optional, Host, SkipSelf, OnInit, EventEmitter, Output } from '@angular/core';

import { Store } from '@ngrx/store';

import * as rxForm from '../rx-forms/rx-form.actions';
import { RxFormGroupDirective } from './rx-form-group.directive';


@Directive({
    selector: 'input:not([type=checkbox])[rxFormField],textarea[rxFormField]',
    host: {
        '(input)': 'onChange($event.target.value)'
    }
})

export class RxFormFieldDirective implements OnInit {

    @Input('rxFormField') field: Array<string>;
    @Output() change: EventEmitter<any> = new EventEmitter<any>();
    model: Observable<any>;

    constructor(@Optional() @Host() @SkipSelf() private parent: RxFormGroupDirective) {}

    ngOnInit() {
        this.model = this.parent.model.select(this.field);
    }

    onChange(value: string) {
        this.change.emit({
            path: [this.field],
            value: value
        });
    }

}
