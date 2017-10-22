import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CreateContactComponent } from './create-contact.component';
import { RxFormsModule } from '../rx-forms/module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RxFormsModule
    ],
    declarations: [
        CreateContactComponent
    ],
    exports: [
        CreateContactComponent
    ]
})
export class CreateContactModule { }
