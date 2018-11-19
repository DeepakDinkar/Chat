import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        this.initializeJQueryFunctions();
    }

    private initializeJQueryFunctions() {
        jQuery('.menu .item').tab();
    }
}
