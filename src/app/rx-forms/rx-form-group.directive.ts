import { Observable } from 'rxjs/Observable';
import { Directive, Input, Host, SkipSelf, OnInit, Optional, EventEmitter, Output } from '@angular/core';
import { RxFormDirective } from './rx-form.directive';

@Directive({
    selector: '[rxFormGroup]'
})

export class RxFormGroupDirective implements OnInit {

    @Input('rxFormGroup') group: string;
    @Output() change: EventEmitter<any> = new EventEmitter<any>();
    model: Observable<any>;

    // TODO: add an abstract class here because the parent can be RxFormDirective or RxFormFieldDirective
    constructor(@Optional() @Host() @SkipSelf() private parent: RxFormDirective) {}

    ngOnInit() {
        this.model = this.parent.model.select(this.group);
    }

    // TODO: interface for event, catch onChange($event)
    onChange(event: any) {
        this.change.emit({
            path: [this.group, ...event.path],
            value: event.value
        });
    }
}
