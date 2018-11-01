import { Component, ElementRef, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-mid-gallery',
  templateUrl: './mid-gallery.component.html',
  styleUrls: ['./mid-gallery.component.css']
})
export class MidGalleryComponent implements OnInit {
  slideIndex = 1;
  message = '';
  messages: any[] = [];
  private socket;
  sockets = io();
  url = 'http://localhost:3000';
  constructor(private elementRef: ElementRef) {
    this.socket = io(this.url);
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n) {
    // let i;
    // const slides = document.getElementsByClassName('mySlides');
    // const dots = document.getElementsByClassName('demo');
    // const captionText = document.getElementById('caption');
    // if (n > slides.length) {
    //   this.slideIndex = 1;
    // }
    // if (n < 1) {
    //   this.slideIndex = slides.length;
    // }
    // for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = 'none';
    // }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace('active', '');
    // }
    // slides[this.slideIndex - 1].style.display = 'block';
    // dots[this.slideIndex - 1].className += ' active';
    // captionText.innerHTML = dots[this.slideIndex - 1].alt;
  }
}
