import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aareon-ws-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log('home contructor');
  }

  ngOnInit(): void {
    console.log('home init');
  }
}
