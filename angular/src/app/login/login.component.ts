import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginGroup: FormGroup;

    constructor(private route: Router, private fb: FormBuilder) {}

    ngOnInit() {
        this.createLoginForm();
    }

    private createLoginForm() {
        this.loginGroup = this.fb.group({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    navigate(routeString: string, formValue: any) {
        this.route.navigate([routeString], {
            queryParams: { userName: formValue.userName }
        });
    }
}
