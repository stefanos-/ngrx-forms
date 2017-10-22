import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { forms } from './rx-forms.reducers';
import { RxFormsFieldDirective } from './rx-forms-field.directive';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('forms', forms),
    ],
    declarations: [
        RxFormsFieldDirective
    ],
    exports: [
        RxFormsFieldDirective
    ],
})
export class RxFormsModule { }
