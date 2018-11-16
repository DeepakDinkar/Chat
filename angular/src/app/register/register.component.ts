import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ChatsService } from '../service/chat.service';

declare var jQuery: any;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerGroup: FormGroup;
    profilePic = 'boy-1.png';

    constructor(
        private route: Router,
        private fb: FormBuilder,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.initializeJQueryFunctions();
        this.createRegisterGroup();
    }

    submitRegister(formValue: any) {
        this.http
            .post('http://localhost:3000/register', formValue, {
                headers: { 'Content-Type': 'application/json' }
            })
            .toPromise()
            .then(register => {
                sessionStorage.setItem('userName', formValue.userName);
                this.navigate('/contacts');
            });
    }

    navigate(routeString: string) {
        this.route.navigate([routeString]);
    }

    private createRegisterGroup() {
        this.registerGroup = this.fb.group({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            re_enterPassword: new FormControl('', Validators.required),
            profilePic: new FormControl('')
        });
    }

    private initializeJQueryFunctions() {
        jQuery('.ui.inline.dropdown').dropdown({
            onChange: val => {
                this.profilePic = val;
            }
        });
    }
}
