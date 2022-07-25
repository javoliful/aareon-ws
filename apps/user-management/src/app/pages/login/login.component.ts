import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aareon-ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log('login contructor');
  }

  ngOnInit(): void {
    console.log('login init');
  }
}
