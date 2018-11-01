import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private elementRef: ElementRef) {}
    title = 'app';
    ngOnInit() {

    }

    getModal() {
        $('#modal').modal('show');
    }
}
