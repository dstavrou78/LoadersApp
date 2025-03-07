/* eslint-disable @angular-eslint/prefer-standalone */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
  ) {
    //...
  }
ngOnInit() {
    //...
  }

  title = 'loadersapp.client';
}
