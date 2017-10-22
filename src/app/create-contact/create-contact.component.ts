import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular//common/http';

import { Store } from '@ngrx/store';

import * as rxForm from '../rx-forms/rx-form.actions';

@Component({
    selector: 'app-create-contact',
    templateUrl: './create-contact.component.html',
    styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private store: Store<any>) {}

    ngOnInit(): void {
        this.http.get('/assets/data.json').subscribe(data => {
            this.store.dispatch(new rxForm.SetDataAction(data));
        });
  }
}
