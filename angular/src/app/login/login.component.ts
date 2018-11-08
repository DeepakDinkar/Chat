import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginGroup: FormGroup;
    loginError = false;

    constructor(
        private route: Router,
        private fb: FormBuilder,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.createLoginForm();
    }

    private createLoginForm() {
        this.loginGroup = this.fb.group({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    loginSubmit(formValue: any) {
        this.http
            .post('http://localhost:3000/login', formValue, {
                headers: { 'Content-Type': 'application/json' }
            })
            .toPromise()
            .then(body => {
                console.log(body);
                this.navigate('/contacts');
            })
            .catch(error => {
                this.loginError = true;
            });
    }
    navigate(routeString: string) {
        this.route.navigate([routeString]);
    }
}
