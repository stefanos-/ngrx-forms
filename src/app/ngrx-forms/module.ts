import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { forms } from './ngrx-forms.reducers';
import { NgrxFormsFieldDirective } from './ngrx-forms-field.directive';
import { NgrxFormsDirective } from './ngrx-forms.directive';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('forms', forms),
    ],
    declarations: [
        NgrxFormsFieldDirective,
        NgrxFormsDirective
    ],
    exports: [
        NgrxFormsFieldDirective,
        NgrxFormsDirective
    ],
})
export class NgrxFormsModule { }
