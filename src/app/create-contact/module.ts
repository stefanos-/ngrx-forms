import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CreateContactComponent } from './create-contact.component';
import { NgrxFormsModule } from '../ngrx-forms/module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        NgrxFormsModule
    ],
    declarations: [
        CreateContactComponent
    ],
    exports: [
        CreateContactComponent
    ]
})
export class CreateContactModule { }
