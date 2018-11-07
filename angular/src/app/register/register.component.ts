import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(private route: Router) {}

    ngOnInit() {
        jQuery('.ui.inline.dropdown').dropdown({
            onChange: val => {
                this.getElement(val);
            }
        });
    }

    navigate(routeString: string) {
        this.route.navigate([routeString]);
    }

    getElement(value: any) {
        console.log(value);
    }
}
