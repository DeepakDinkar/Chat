import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    loggedUser: any;
    constructor() {}

    ngOnInit() {
        this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
    }
}
