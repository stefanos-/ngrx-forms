import { Observable } from 'rxjs/Observable';
import { Directive, Input, Host, SkipSelf, OnInit } from '@angular/core';
import { RxFormDirective } from './rx-form.directive';

@Directive({
    selector: '[rxFormGroup]'
})

export class RxFormGroupDirective implements OnInit {

    @Input('rxFormGroup') group: string;
    model: Observable<any>;

    // TODO: add an abstract class here because the parent can be RxFormDirective or RxFormFieldDirective
    constructor(@Host() @SkipSelf() private parent: RxFormDirective) {}

    ngOnInit() {
        this.model = this.parent.model.select(this.group);
    }
}
