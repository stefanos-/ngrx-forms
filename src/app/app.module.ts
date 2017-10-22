import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RxFormModule } from './rx-forms/module';

import { reducers , metaReducers} from './app.reducers';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CreateContactModule } from './create-contact/module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RxFormModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        CreateContactModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
