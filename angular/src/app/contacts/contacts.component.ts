import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatsService } from '../service/chat.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    contacts = [];
    loggedUser: any;
    private filterContacts = [];

    constructor(
        private route: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.getUsers();
        this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
    }

    navigate(routeString: string, contact: any) {
        this.route.navigate([routeString], {
            queryParams: { user: JSON.stringify(contact) }
        });
    }

    searchContacts(event: any) {
        const search = event.target.value;
        if (search !== '') {
            this.contacts = this.filterContacts.filter(contact => contact.userName.includes(search));
        } else {
            this.contacts = this.filterContacts;
        }
    }
    private getUsers() {
        this.http
            .get('http://localhost:3000/contacts')
            .toPromise()
            .then(contacts => {
               this.contacts = <Array<any>>contacts;
               this.filterContacts = <Array<any>>contacts;
            });
    }
}
