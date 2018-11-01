import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private elementRef: ElementRef ) { }

  ngOnInit() {
  }
  toggleLeftPanel() {
    // this.elementRef.nativeElement.querySelector('#mySidenav').classList.toggle('expandside');
    // this.elementRef.nativeElement.querySelector('.container').classList.toggle('change');
  }
}
