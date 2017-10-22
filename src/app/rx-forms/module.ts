import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { form } from './rx-form.reducers';
import { RxFormFieldDirective } from './rx-form-field.directive';
import { RxFormGroupDirective } from './rx-form-group.directive';
import { RxFormDirective } from './rx-form.directive';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('form', form),
    ],
    declarations: [
        RxFormFieldDirective,
        RxFormGroupDirective,
        RxFormDirective
    ],
    exports: [
        RxFormFieldDirective,
        RxFormGroupDirective,
        RxFormDirective
    ],
})
export class RxFormModule { }
